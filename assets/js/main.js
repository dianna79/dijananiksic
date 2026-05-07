(function () {
	const body = document.body;
	const panels = Array.from(document.querySelectorAll(".portfolio-panel"));
	const backdrop = document.querySelector("[data-close-panel]");
	const closeButtons = document.querySelectorAll(".close-panel");
	const contactForm = document.querySelector("[data-contact-form]");
	let activePanel = null;

	function openPanel(id) {
		const panel = panels.find((item) => item.id === id);

		if (!panel) {
			closePanel(false);
			return;
		}

		panels.forEach((item) => {
			item.hidden = item !== panel;
			item.classList.remove("is-active");
		});

		activePanel = panel;
		body.classList.add("panel-open");
		backdrop.hidden = false;
		panel.hidden = false;

		requestAnimationFrame(() => {
			panel.classList.add("is-active");
			panel.focus({ preventScroll: true });
		});
	}

	function closePanel(updateHash = true) {
		if (!activePanel) {
			body.classList.remove("panel-open");
			backdrop.hidden = true;
			return;
		}

		const panel = activePanel;
		panel.classList.remove("is-active");
		body.classList.remove("panel-open");
		backdrop.hidden = true;
		activePanel = null;

		window.setTimeout(() => {
			panel.hidden = true;
		}, 240);

		if (updateHash && window.location.hash) {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		}
	}

	function handleHash() {
		const id = window.location.hash.replace("#", "");

		if (id) {
			openPanel(id);
		} else {
			closePanel(false);
		}
	}

	window.addEventListener("load", () => {
		window.setTimeout(() => body.classList.remove("is-loading"), 100);
		handleHash();
	});

	window.addEventListener("hashchange", handleHash);

	backdrop.addEventListener("click", () => closePanel());

	closeButtons.forEach((button) => {
		button.addEventListener("click", () => closePanel());
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closePanel();
		}
	});

	if (contactForm) {
		const status = contactForm.querySelector("[data-form-status]");

		contactForm.addEventListener("submit", async (event) => {
			event.preventDefault();

			const endpoint = contactForm.dataset.formEndpoint;

			if (!endpoint || endpoint.includes("REPLACE_WITH_FORM_ID")) {
				status.textContent = "Connect a secure form endpoint before publishing this form.";
				return;
			}

			status.textContent = "Sending...";

			try {
				const response = await fetch(endpoint, {
					method: "POST",
					body: new FormData(contactForm),
					headers: {
						Accept: "application/json"
					}
				});

				if (!response.ok) {
					throw new Error("Form submission failed.");
				}

				contactForm.reset();
				status.textContent = "Thank you. Your message has been sent.";
			} catch (error) {
				status.textContent = "Something went wrong. Please try again later.";
			}
		});
	}
})();

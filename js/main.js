/* FlowTask — landing page behaviour */

document.addEventListener('DOMContentLoaded', function () {

  /* Sign-up CTA Smooth Scroll (без штучних затримок) */
  function startSignup(e) {
    var trial = document.getElementById('trial');
    if (trial) {
      e.preventDefault();
      trial.scrollIntoView({ behavior: 'smooth' });
    }
  }

  var headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', startSignup);
  }

  var heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', startSignup);
  }

  /* Trial form validation */
  var trialForm = document.getElementById('trial-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = trialForm.querySelector('input[name="email"]');
      var errorBox = document.getElementById('trial-error');

      if (!email.value || !email.checkValidity()) {
        email.style.boxShadow = '0 0 0 2px #ef4444';
        email.setAttribute('aria-invalid', 'true');
        if (errorBox) {
          errorBox.textContent = 'Please enter a valid work email address.';
        }
        email.focus();
        return;
      }

      email.removeAttribute('aria-invalid');
      trialForm.innerHTML = '<p style="font-weight:600; padding:12px;">Thanks — check your inbox, your workspace is ready!</p>';
    });
  }

  /* Accessible FAQ accordion */
  document.querySelectorAll('.faq__q').forEach(function (button) {
    button.addEventListener('click', function () {
      var item = button.parentElement;
      var isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

});
    function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;
      var reg = /^\w{1,}@\w{1,}\.\w{2,}$/;

      resetError(elems.name.parentNode);
      if (!elems.name.value || elems.name.value == " ") {
        showError(elems.name.parentNode, ' Укажите Ваше Имя.');
      }
      resetError(elems.email.parentNode);

      if (!elems.email.value || elems.email.value == " ") {
        showError(elems.email.parentNode, ' Укажите E-mail.');
      } else if (!reg.test(elems.email.value)) {
        showError(elems.email.parentNode, ' Не верный E-mail.');
      }

      resetError(elems.office.parentNode);
      if (!elems.office.value || elems.office.value == " ") {
        showError(elems.office.parentNode, ' Укажите Вашу должность.');
      }

      resetError(elems.review.parentNode);
      if (!elems.review.value || elems.review.value == " ") {
        showError(elems.review.parentNode, ' Отсутствует текст.');
      }

      resetError(elems.capcha.parentNode);
      if (!elems.capcha.value || elems.capcha.value == " ") {
        showError(elems.capcha.parentNode, ' Введите код.');
      }

    }


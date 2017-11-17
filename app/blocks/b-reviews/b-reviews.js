    function showError(container, errorMessage) {
    container.className = 'form__input_error';
    var msgElem = document.createElement('span');
    msgElem.className = "form__input_error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "form__input_error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;
      var reg = /^\w{1,}@\w{1,}\.\w{2,}$/;
      var regPhone = /^(\+375)\d{9}$/;

      if(elems.name !== undefined) {
        resetError(elems.name.parentNode);
        if (!elems.name.value || elems.name.value == " ") {
          showError(elems.name.parentNode, ' Укажите Ваше Имя.');
        }
      }

      if(elems.email !== undefined) {
        resetError(elems.email.parentNode);
        if (!elems.email.value || elems.email.value == " ") {
          showError(elems.email.parentNode, ' Укажите E-mail.');
        } else if (!reg.test(elems.email.value)) {
          showError(elems.email.parentNode, ' Неверный E-mail.');
        }
      }

      if(elems.office !== undefined) {
        resetError(elems.office.parentNode);
        if (!elems.office.value || elems.office.value == " ") {
          showError(elems.office.parentNode, ' Укажите Вашу должность.');
        }
      }

      if(elems.review !== undefined) {
        resetError(elems.review.parentNode);
        if (!elems.review.value || elems.review.value == " ") {
          showError(elems.review.parentNode, ' Отсутствует текст.');
        }
      }

      if(elems.capcha !== undefined) {
        resetError(elems.capcha.parentNode);
        if (!elems.capcha.value || elems.capcha.value == " ") {
          showError(elems.capcha.parentNode, ' Введите код.');
        }
      }

      if(elems.phone !== undefined) {
        resetError(elems.phone.parentNode);
        if (!elems.phone.value || elems.phone.value == " ") {
          showError(elems.phone.parentNode, ' Укажите телефон.');
        } else if (!regPhone.test(elems.phone.value)) {
          showError(elems.phone.parentNode, ' Введите корректный номер');
        }
      }

    }


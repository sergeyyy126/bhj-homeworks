document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
  
    const fontControls = document.querySelectorAll('.book__control_font-size .font-size');
    const textColorControls = document.querySelectorAll('.book__control_color .color');
    const bgColorControls = document.querySelectorAll('.book__control_background .color');
  
    if (!book) return;
  
    const removeFontClasses = () => {
      book.classList.remove('book_fs-small', 'book_fs-big');
    };
    const removeTextColorClasses = () => {
      book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    };
    const removeBgClasses = () => {
      book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    };
  
    fontControls.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        fontControls.forEach(c => c.classList.remove('font-size_active'));
        el.classList.add('font-size_active');
  
        removeFontClasses();
        const size = (el.dataset.size || '').toLowerCase();
        if (size === 'small') book.classList.add('book_fs-small');
        else if (size === 'big') book.classList.add('book_fs-big');
      });
    });
  
    textColorControls.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        textColorControls.forEach(c => c.classList.remove('color_active'));
        el.classList.add('color_active');
  
        removeTextColorClasses();
        const color = (el.dataset.textColor || '').toLowerCase();
        if (color) book.classList.add(`book_color-${color}`);
      });
    });
  
    bgColorControls.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        bgColorControls.forEach(c => c.classList.remove('color_active'));
        el.classList.add('color_active');
  
        removeBgClasses();
        const color = (el.dataset.bgColor || '').toLowerCase();
        if (color) book.classList.add(`book_bg-${color}`);
      });
    });
  });
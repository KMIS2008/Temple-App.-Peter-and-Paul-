import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaDove } from 'react-icons/fa';

export function initHomePage() {
  // Функция для создания одного голубя (иконки)
  const createDove = () => {
    const dove = document.createElement("div");
    // Рендерим компонент FaDove в строку
    const doveIconString = ReactDOMServer.renderToString(
      <FaDove size={40} color="#ffffff" />
    );
    dove.innerHTML = doveIconString;

    // Устанавливаем позиционирование
    dove.style.position = "fixed";
    // Начальное положение: снизу за пределами экрана
    dove.style.bottom = "-40px";
    // Случайное горизонтальное положение
    dove.style.left = Math.random() * window.innerWidth + "px";
    dove.style.opacity = "1";
    dove.style.pointerEvents = "none";
    // Анимация: голубь поднимается вверх и исчезает
    dove.style.transition = "transform 6s linear, opacity 6s linear";

    document.body.appendChild(dove);

    // Запускаем анимацию через 100 мс
    setTimeout(() => {
      dove.style.transform = `translateY(-${window.innerHeight + 40}px)`;
      dove.style.opacity = "0";
    }, 100);

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
      dove.remove();
    }, 5100);
  };

  // Создаём нового голубя каждые 700 мс
  const doveInterval = setInterval(createDove, 700);

  // Останавливаем генерацию голубей через 30 секунд (по необходимости)
  setTimeout(() => {
    clearInterval(doveInterval);
  }, 15000);
}
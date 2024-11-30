import React from "react";
import "./CalorieCalculator.scss";
import Aside from "../../components/Aside/Aside";
import fire from "../../assets/CalorieCalculator/fire.png";
import ball from "../../assets/CalorieCalculator/ball.png";
import sleep from "../../assets/CalorieCalculator/sleep.png";
import pc from "../../assets/CalorieCalculator/pc.png";
import gym from "../../assets/CalorieCalculator/gym.png";
const CalorieCalculator = () => {
  return (
    <div className="calorieCalculator">
      <div className="calorieCalculator__container">
        <Aside />
        <div className="calorieCalculator__block">
          <div className="calorieCalculator__block-container">
            <h1 className="calorieCalculator__title">Калькулятор калорий</h1>

            <form action="" className="calorieCalculator__form">
              <p className="calorieCalculator__form-gender-title">Ваш пол:</p>
              <div className="calorieCalculator__form-gender">
                <label
                  htmlFor="male"
                  className="calorieCalculator__form-gender-label"
                >
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="calorieCalculator__form-gender-input"
                  />
                  <span className="calorieCalculator__form-gender-span">
                    Мужчина
                  </span>
                </label>
                <label
                  htmlFor="female"
                  className="calorieCalculator__form-gender-label"
                >
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="calorieCalculator__form-gender-input"
                  />
                  <span className="calorieCalculator__form-gender-span">
                    Женщина
                  </span>
                </label>
              </div>

              <p className="calorieCalculator__form-params-title">
                Ваши параметры:
              </p>
              <div className="calorieCalculator__form-params">
                <input
                  type="text"
                  className="calorieCalculator__form-params-input"
                  placeholder="Возраст"
                />
                <input
                  type="text"
                  className="calorieCalculator__form-params-input"
                  placeholder="Вес, кг"
                />
                <input
                  type="text"
                  className="calorieCalculator__form-params-input"
                  placeholder="Рост, см"
                />
              </div>

              <p className="calorieCalculator__form-activity-title">
                Ваша активность:
              </p>
              <div className="calorieCalculator__form-activity">
                <label
                  htmlFor="minimal"
                  className="calorieCalculator__form-activity-label"
                >
                  <input
                    type="radio"
                    name="activity"
                    id="minimal"
                    className="calorieCalculator__form-activity-input"
                  />
                  <span className="calorieCalculator__form-activity-span">
                    <img
                      src={sleep}
                      alt=""
                      className="calorieCalculator__form-activity-span-img"
                    />
                    <span className="calorieCalculator__form-activity-span-text">
                      Минимальная <br />
                      активность
                    </span>
                  </span>
                </label>
                <label
                  htmlFor="low"
                  className="calorieCalculator__form-activity-label"
                >
                  <input
                    type="radio"
                    name="activity"
                    id="low"
                    className="calorieCalculator__form-activity-input"
                  />
                  <span className="calorieCalculator__form-activity-span">
                    <img
                      src={pc}
                      alt=""
                      className="calorieCalculator__form-activity-span-img"
                    />
                    <span className="calorieCalculator__form-activity-span-text">
                      Низкая <br />
                      активность
                    </span>
                  </span>
                </label>
                <label
                  htmlFor="normal"
                  className="calorieCalculator__form-activity-label"
                >
                  <input
                    type="radio"
                    name="activity"
                    id="normal"
                    className="calorieCalculator__form-activity-input"
                  />
                  <span className="calorieCalculator__form-activity-span">
                    <img
                      src={gym}
                      alt=""
                      className="calorieCalculator__form-activity-span-img"
                    />
                    <span className="calorieCalculator__form-activity-span-text">
                      Умеренная <br />
                      активность
                    </span>
                  </span>
                </label>
                <label
                  htmlFor="high"
                  className="calorieCalculator__form-activity-label"
                >
                  <input
                    type="radio"
                    name="activity"
                    id="high"
                    className="calorieCalculator__form-activity-input"
                  />
                  <span className="calorieCalculator__form-activity-span">
                    <img
                      src={ball}
                      alt=""
                      className="calorieCalculator__form-activity-span-img"
                    />
                    <span className="calorieCalculator__form-activity-span-text">
                      Высокая <br />
                      активность
                    </span>
                  </span>
                </label>
                <label
                  htmlFor="veryHigh"
                  className="calorieCalculator__form-activity-label"
                >
                  <input
                    type="radio"
                    name="activity"
                    id="veryHigh"
                    className="calorieCalculator__form-activity-input"
                  />
                  <span className="calorieCalculator__form-activity-span">
                    <img
                      src={fire}
                      alt=""
                      className="calorieCalculator__form-activity-span-img"
                    />
                    <span className="calorieCalculator__form-activity-span-text">
                      Очень высокая <br />
                      активность
                    </span>
                  </span>
                </label>
              </div>

              <p className="calorieCalculator__form-goal-title">Ваша цель:</p>
              <div className="calorieCalculator__form-goal">
                <label
                  htmlFor="lose"
                  className="calorieCalculator__form-goal-label"
                >
                  <input
                    type="radio"
                    name="goal"
                    id="lose"
                    className="calorieCalculator__form-goal-input"
                  />
                  <span className="calorieCalculator__form-goal-span">
                    Сбросить вес
                  </span>
                </label>
                <label
                  htmlFor="hold"
                  className="calorieCalculator__form-goal-label"
                >
                  <input
                    type="radio"
                    name="goal"
                    id="hold"
                    className="calorieCalculator__form-goal-input"
                  />
                  <span className="calorieCalculator__form-goal-span">
                    Поддерживать вес
                  </span>
                </label>
                <label
                  htmlFor="gain"
                  className="calorieCalculator__form-goal-label"
                >
                  <input
                    type="radio"
                    name="goal"
                    id="gain"
                    className="calorieCalculator__form-goal-input"
                  />
                  <span className="calorieCalculator__form-goal-span">
                    Набрать вес
                  </span>
                </label>
              </div>

              <p className="calorieCalculator__form-formula-title">
                Формула расчёта:
              </p>
              <div className="calorieCalculator__form-formula">
                <label
                  htmlFor="HB"
                  className="calorieCalculator__form-formula-label"
                >
                  <input
                    type="radio"
                    name="formula"
                    id="HB"
                    className="calorieCalculator__form-formula-input"
                  />
                  <span className="calorieCalculator__form-formula-span">
                    Харриса-Бенедикта
                  </span>
                </label>
                <label
                  htmlFor="MSZ"
                  className="calorieCalculator__form-formula-label"
                >
                  <input
                    type="radio"
                    name="formula"
                    id="MSZ"
                    className="calorieCalculator__form-formula-input"
                  />
                  <span className="calorieCalculator__form-formula-span">
                    Миффлина-Сан
                    <br />
                    Жеора
                  </span>
                </label>
              </div>
              <button className="calorieCalculator__form-button">
                Рассчитать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;

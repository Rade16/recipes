import React, { useState, useEffect } from "react";
import "./CalorieCalculator.scss";
import Aside from "../../components/Aside/Aside";
import fire from "../../assets/CalorieCalculator/fire.png";
import ball from "../../assets/CalorieCalculator/ball.png";
import sleep from "../../assets/CalorieCalculator/sleep.png";
import pc from "../../assets/CalorieCalculator/pc.png";
import gym from "../../assets/CalorieCalculator/gym.png";
import calories from "../../assets/CalorieCalculator/calories.svg";
import carbs from "../../assets/CalorieCalculator/carbs.svg";
import protein from "../../assets/CalorieCalculator/protein.svg";
import fats from "../../assets/CalorieCalculator/fats.svg";

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activity: "",
    goal: "",
    formula: "",
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { gender, age, weight, height, activity, goal, formula } = formData;
    console.log(formData);
    if (
      !gender ||
      !age ||
      !weight ||
      !height ||
      !activity ||
      !goal ||
      !formula
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    let bmr = 0;
    if (formula === "HB") {
      if (gender === "male") {
        bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
      } else {
        bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
      }
    } else if (formula === "MSZ") {
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
    }

    const activityMultiplier = {
      minimal: 1.2,
      low: 1.375,
      normal: 1.55,
      high: 1.725,
      veryHigh: 1.9,
    }[activity];

    let maintenanceCalories = bmr * activityMultiplier;

    // Корректировка цели
    if (goal === "lose") {
      maintenanceCalories -= 500;
    } else if (goal === "gain") {
      maintenanceCalories += 500;
    }
    const protein = (maintenanceCalories * 0.2) / 4;
    const fat = (maintenanceCalories * 0.3) / 9;
    const carbs = (maintenanceCalories * 0.5) / 4;

    setResult({
      calories: Math.round(maintenanceCalories),
      protein: Math.round(protein),
      fat: Math.round(fat),
      carbs: Math.round(carbs),
    });
  };
  return (
    <div className="calorieCalculator">
      <div className="calorieCalculator__container">
        <Aside />
        <div className="calorieCalculator__block">
          <div className="calorieCalculator__block-container">
            <h1 className="calorieCalculator__title">Калькулятор калорий</h1>

            <form
              action=""
              className="calorieCalculator__form"
              onSubmit={handleSubmit}
            >
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
                    value="male"
                    className="calorieCalculator__form-gender-input"
                    onChange={handleInputChange}
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
                    value="female"
                    className="calorieCalculator__form-gender-input"
                    onChange={handleInputChange}
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
                  name="age"
                  className="calorieCalculator__form-params-input"
                  placeholder="Возраст"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="weight"
                  className="calorieCalculator__form-params-input"
                  placeholder="Вес, кг"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="height"
                  className="calorieCalculator__form-params-input"
                  placeholder="Рост, см"
                  onChange={handleInputChange}
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
                    value="minimal"
                    className="calorieCalculator__form-activity-input"
                    onChange={handleInputChange}
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
                    value="low"
                    className="calorieCalculator__form-activity-input"
                    onChange={handleInputChange}
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
                    value="normal"
                    className="calorieCalculator__form-activity-input"
                    onChange={handleInputChange}
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
                    value="high"
                    className="calorieCalculator__form-activity-input"
                    onChange={handleInputChange}
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
                    value="veryHigh"
                    className="calorieCalculator__form-activity-input"
                    onChange={handleInputChange}
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
                    value="lose"
                    className="calorieCalculator__form-goal-input"
                    onChange={handleInputChange}
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
                    value="hold"
                    className="calorieCalculator__form-goal-input"
                    onChange={handleInputChange}
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
                    value="gain"
                    className="calorieCalculator__form-goal-input"
                    onChange={handleInputChange}
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
                    value="HB"
                    className="calorieCalculator__form-formula-input"
                    onChange={handleInputChange}
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
                    value="MSZ"
                    className="calorieCalculator__form-formula-input"
                    onChange={handleInputChange}
                  />
                  <span className="calorieCalculator__form-formula-span">
                    Миффлина-Сан
                    <br />
                    Жеора
                  </span>
                </label>
              </div>
              <button type="submit" className="calorieCalculator__form-button">
                Рассчитать
              </button>
            </form>

            {result && (
              <div className="calorieCalculator__result">
                <p className="calorieCalculator__result-title">
                  Ваша суточная норма КБЖУ:
                </p>
                <p className="calorieCalculator__result-text-ccal">
                  <img
                    src={calories}
                    alt=""
                    className="calorieCalculator__result-img-ccal"
                  />
                  кКал: {result.calories}
                </p>

                <p className="calorieCalculator__result-text">
                  <img
                    src={protein}
                    alt=""
                    className="calorieCalculator__result-img"
                  />
                  Белки: {result.protein} г
                </p>
                <p className="calorieCalculator__result-text">
                  <img
                    src={fats}
                    alt=""
                    className="calorieCalculator__result-img"
                  />
                  Жиры: {result.fat} г
                </p>
                <p className="calorieCalculator__result-text">
                  <img
                    src={carbs}
                    alt=""
                    className="calorieCalculator__result-img"
                  />
                  Углеводы: {result.carbs} г
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;

import Basics from "./Basics.js";
/**
 * 1. Загрузить конфигурацию поля
 * 2. Создать поле
 * 3. Добавить отработчики событий
 * 4. Отдать поле
 * 
 * Каждый элемент должен содержать методы:
 * - render (отрисовать)
 * - получить значение/значения
 * - задать значения
 * - отработчики
 */
export default class Element extends Basics {
	constructor(config) {
		super();
		this.config = config;
	}
	
}
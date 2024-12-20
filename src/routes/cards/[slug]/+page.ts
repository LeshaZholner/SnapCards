import type { CardType } from "$lib/types/card-type";
import type { SetType } from "$lib/types/set-type";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = ({ params }): { set: SetType } => {

  let setCard = dataSets.find(x => x.id == params.slug as any)

  if (setCard === undefined) {
    error(404, "Not Found");
  }
  return {
    set: setCard,
  }
}

const dataCards: CardType[][] = [
  [
    { id: 1, term: "apple", definition: "яблоко", example: "I eat an apple every day." },
    { id: 2, term: "book", definition: "книга", example: "This book is very interesting." },
    { id: 3, term: "car", definition: "машина", example: "She drives a red car." },
    { id: 4, term: "dog", definition: "собака", example: "My dog loves to run." },
    { id: 5, term: "house", definition: "дом", example: "The house is very big." },
    { id: 6, term: "pen", definition: "ручка", example: "I need a pen to write this." },
    { id: 7, term: "chair", definition: "стул", example: "This chair is very comfortable." },
    { id: 8, term: "phone", definition: "телефон", example: "I lost my phone yesterday." },
    { id: 9, term: "school", definition: "школа", example: "My brother goes to school every day." },
    { id: 10, term: "table", definition: "стол", example: "The books are on the table." },
    { id: 11, term: "water", definition: "вода", example: "Drink more water to stay healthy." },
    { id: 12, term: "window", definition: "окно", example: "The window is open." },
  ],
  [
    { id: 1, term: "How are you?", definition: "Как дела?", example: "How are you? I'm fine, thanks." },
    { id: 2, term: "Good morning", definition: "Доброе утро", example: "Good morning! Did you sleep well?" },
    { id: 3, term: "Thank you", definition: "Спасибо", example: "Thank you for your help." },
    { id: 4, term: "Excuse me", definition: "Извините", example: "Excuse me, where is the station?" },
    { id: 5, term: "I'm sorry", definition: "Простите", example: "I'm sorry for being late." },
    { id: 6, term: "You're welcome", definition: "Пожалуйста", example: "You're welcome. Have a nice day." },
    { id: 7, term: "See you later", definition: "Увидимся позже", example: "See you later at the park." },
    { id: 8, term: "Can you help me?", definition: "Можете мне помочь?", example: "Can you help me carry this?" },
    { id: 9, term: "How much is this?", definition: "Сколько это стоит?", example: "How much is this book?" },
    { id: 10, term: "What's your name?", definition: "Как вас зовут?", example: "What's your name? My name is John." },
    { id: 11, term: "Nice to meet you", definition: "Приятно познакомиться", example: "Nice to meet you! Welcome to our team." },
    { id: 12, term: "Where are you from?", definition: "Откуда вы?", example: "Where are you from? I'm from France." },
    { id: 13, term: "I don't understand", definition: "Я не понимаю", example: "I don't understand. Can you repeat, please?" },
    { id: 14, term: "Can you repeat?", definition: "Можете повторить?", example: "Can you repeat that, please?" },
    { id: 15, term: "Please", definition: "Пожалуйста", example: "Please pass me the salt." },
  ],
  [
    { id: 1, term: "passport", definition: "паспорт", example: "Do you have your passport?" },
    { id: 2, term: "ticket", definition: "билет", example: "Where is my train ticket?" },
    { id: 3, term: "hotel", definition: "отель", example: "We need to book a hotel." },
    { id: 4, term: "luggage", definition: "багаж", example: "My luggage is very heavy." },
    { id: 5, term: "plane", definition: "самолет", example: "The plane departs at 6 PM." },
    { id: 6, term: "map", definition: "карта", example: "Let's use the map to find the museum." },
    { id: 7, term: "guide", definition: "гид", example: "Our guide showed us the city." },
    { id: 8, term: "check-in", definition: "регистрация", example: "We need to check-in for our flight." },
  ],
  [
    { id: 1, term: "hello", definition: "привет", example: "Hello, how are you?" },
    { id: 2, term: "please", definition: "пожалуйста", example: "Please, can you help me?" },
    { id: 3, term: "yes", definition: "да", example: "Yes, I agree with you." },
    { id: 4, term: "no", definition: "нет", example: "No, I don't like coffee." },
    { id: 5, term: "thank you", definition: "спасибо", example: "Thank you for your support." },
    { id: 6, term: "goodbye", definition: "до свидания", example: "Goodbye, see you tomorrow!" },
    { id: 7, term: "excuse me", definition: "извините", example: "Excuse me, is this seat taken?" },
    { id: 8, term: "good night", definition: "спокойной ночи", example: "Good night, sleep well." },
    { id: 9, term: "I'm sorry", definition: "мне жаль", example: "I'm sorry for the inconvenience." },
    { id: 10, term: "what time is it?", definition: "который час?", example: "What time is it? It's 3 o'clock." },
  ],
  [
    { id: 1, term: "meeting", definition: "встреча", example: "We have a meeting at 3 PM." },
    { id: 2, term: "deadline", definition: "срок", example: "The deadline is tomorrow." },
    { id: 3, term: "presentation", definition: "презентация", example: "I am preparing a presentation." },
    { id: 4, term: "agenda", definition: "повестка дня", example: "The agenda includes three main topics." },
    { id: 5, term: "client", definition: "клиент", example: "The client is very satisfied with the service." },
    { id: 6, term: "contract", definition: "контракт", example: "We signed the contract yesterday." },
    { id: 7, term: "proposal", definition: "предложение", example: "Our proposal was accepted." },
    { id: 8, term: "salary", definition: "зарплата", example: "He received a salary increase." },
    { id: 9, term: "teamwork", definition: "командная работа", example: "Teamwork is essential for success." },
    { id: 10, term: "project", definition: "проект", example: "The project will take three months." },
    { id: 11, term: "strategy", definition: "стратегия", example: "We need a new strategy for growth." },
    { id: 12, term: "budget", definition: "бюджет", example: "The budget is limited this year." },
    { id: 13, term: "email", definition: "электронная почта", example: "I sent you an email yesterday." },
    { id: 14, term: "feedback", definition: "обратная связь", example: "We received positive feedback." },
    { id: 15, term: "negotiation", definition: "переговоры", example: "The negotiation went well." },
    { id: 16, term: "task", definition: "задача", example: "This is your task for today." },
    { id: 17, term: "deadline", definition: "срок выполнения", example: "The deadline is approaching." },
    { id: 18, term: "colleague", definition: "коллега", example: "My colleague is very supportive." },
  ],
  [
    { id: 1, term: "break the ice", definition: "разрядить обстановку", example: "He told a joke to break the ice." },
    { id: 2, term: "piece of cake", definition: "проще простого", example: "This task is a piece of cake for her." },
    { id: 3, term: "spill the beans", definition: "разболтать секрет", example: "She accidentally spilled the beans about the surprise party." },
    { id: 4, term: "hit the nail on the head", definition: "попасть в точку", example: "You hit the nail on the head with your analysis." },
    { id: 5, term: "under the weather", definition: "нездоровится", example: "I feel a bit under the weather today." },
    { id: 6, term: "costs an arm and a leg", definition: "стоить целое состояние", example: "This car costs an arm and a leg." },
    { id: 7, term: "bite the bullet", definition: "принять трудное решение", example: "He decided to bite the bullet and move to another city." },
    { id: 8, term: "let the cat out of the bag", definition: "выдать секрет", example: "Someone let the cat out of the bag about their engagement." },
    { id: 9, term: "kick the bucket", definition: "умереть", example: "He jokingly said he’s not ready to kick the bucket yet." },
    { id: 10, term: "burn the midnight oil", definition: "работать допоздна", example: "She burned the midnight oil to finish her project." },
    { id: 11, term: "call it a day", definition: "закончить на сегодня", example: "We worked hard; let's call it a day." },
    { id: 12, term: "on cloud nine", definition: "на седьмом небе от счастья", example: "She’s been on cloud nine since she got promoted." },
    { id: 13, term: "break a leg", definition: "ни пуха ни пера", example: "Break a leg at your audition!" },
    { id: 14, term: "the ball is in your court", definition: "всё зависит от тебя", example: "The ball is in your court now." },
    { id: 15, term: "under the thumb", definition: "под контролем", example: "He’s completely under her thumb." },
    { id: 16, term: "by the skin of your teeth", definition: "едва-едва", example: "I passed the test by the skin of my teeth." },
    { id: 17, term: "over the moon", definition: "очень счастлив", example: "They were over the moon about their wedding." },
    { id: 18, term: "hit the road", definition: "отправиться в путь", example: "We need to hit the road early tomorrow." },
    { id: 19, term: "pull someone’s leg", definition: "подшутить над кем-то", example: "Are you pulling my leg, or is this serious?" },
    { id: 20, term: "a blessing in disguise", definition: "нет худа без добра", example: "Losing that job was a blessing in disguise." },
  ],
  [
    { id: 1, term: "hypothesis", definition: "гипотеза", example: "His hypothesis was proven correct." },
    { id: 2, term: "analysis", definition: "анализ", example: "The analysis took two hours to complete." },
    { id: 3, term: "theory", definition: "теория", example: "This theory explains the phenomenon well." },
    { id: 4, term: "research", definition: "исследование", example: "Her research focused on climate change." },
    { id: 5, term: "evidence", definition: "доказательство", example: "We need more evidence to support this claim." },
    { id: 6, term: "variable", definition: "переменная", example: "The variable affects the outcome significantly." },
    { id: 7, term: "methodology", definition: "методология", example: "Their methodology is very thorough." },
    { id: 8, term: "data", definition: "данные", example: "The data suggests a strong correlation." },
    { id: 9, term: "experiment", definition: "эксперимент", example: "The experiment was successful." },
    { id: 10, term: "observation", definition: "наблюдение", example: "Observation is a key part of this study." },
    { id: 11, term: "conclusion", definition: "вывод", example: "The conclusion aligns with the hypothesis." },
    { id: 12, term: "phenomenon", definition: "явление", example: "This natural phenomenon is fascinating." },
    { id: 13, term: "analysis", definition: "анализ", example: "His analysis uncovered the problem." },
    { id: 14, term: "correlation", definition: "корреляция", example: "There is a strong correlation between the variables." },
  ],
  [
    { id: 1, term: "breakfast", definition: "завтрак", example: "I usually have eggs for breakfast." },
    { id: 2, term: "lunch", definition: "обед", example: "Let’s meet for lunch tomorrow." },
    { id: 3, term: "dinner", definition: "ужин", example: "Dinner is served at 7 PM." },
    { id: 4, term: "appetizer", definition: "закуска", example: "We ordered appetizers before the main course." },
    { id: 5, term: "dessert", definition: "десерт", example: "Ice cream is my favorite dessert." },
    { id: 6, term: "menu", definition: "меню", example: "Could you bring me the menu, please?" },
    { id: 7, term: "fork", definition: "вилка", example: "He dropped his fork on the floor." },
    { id: 8, term: "spoon", definition: "ложка", example: "I need a spoon for the soup." },
    { id: 9, term: "knife", definition: "нож", example: "The knife is very sharp." },
  ],
  [
    { id: 1, term: "price", definition: "цена", example: "The price of this dress is too high." },
    { id: 2, term: "discount", definition: "скидка", example: "This store offers a discount on weekends." },
    { id: 3, term: "cash", definition: "наличные", example: "Do you prefer cash or card?" },
    { id: 4, term: "receipt", definition: "чек", example: "Keep the receipt in case you want a refund." },
    { id: 5, term: "sale", definition: "распродажа", example: "There’s a big sale this weekend." },
    { id: 6, term: "shop", definition: "магазин", example: "I’ll stop by the shop after work." },
    { id: 7, term: "clothes", definition: "одежда", example: "She bought some clothes at the market." },
    { id: 8, term: "size", definition: "размер", example: "What size do you need?" },
    { id: 9, term: "fitting room", definition: "примерочная", example: "The fitting rooms are over there." },
    { id: 10, term: "refund", definition: "возврат", example: "Can I get a refund for this item?" },
    { id: 11, term: "cashier", definition: "кассир", example: "The cashier gave me my change." },
  ],
  [
    { id: 1, term: "Sunny", definition: "солнечно",example: "The weather is sunny today." },
    { id: 2, term: "Rainy", definition: "дождливо", example: "It’s rainy outside, take an umbrella." },
    { id: 3, term: "Snowy", definition: "снежно", example: "It’s snowy in the mountains during winter." },
    { id: 4, term: "Windy", definition: "ветрено", example: "It’s very windy today, the trees are shaking." },
    { id: 5, term: "Cloudy", definition: "облачно", example: "The sky is cloudy, it might rain soon." },
    { id: 6, term: "Stormy", definition: "шторм", example: "The stormy weather caused power outages." },
    { id: 7, term: "Hot", definition: "жарко", example: "It’s too hot to go outside." },
  ],
  [
    { id: 1, term: "Tall", definition: "высокий", example: "He is very tall and easy to spot in a crowd." },
    { id: 2, term: "Short", definition: "короткий", example: "She has short hair." },
    { id: 3, term: "Beautiful", definition: "красивый", example: "The sunset is beautiful tonight." },
    { id: 4, term: "Ugly", definition: "уродливый", example: "The house looks ugly after the storm." },
    { id: 5, term: "Happy", definition: "счастливый", example: "I feel happy when I’m with my friends." },
    { id: 6, term: "Sad", definition: "грустный", example: "She looks sad after hearing the news." },
    { id: 7, term: "Fast", definition: "быстрый", example: "The car is very fast on the highway." },
    { id: 8, term: "Slow", definition: "медленный", example: "The turtle is slow but steady." },
  ],
  [
    { id: 1, term: "Run", definition: "бегать", example: "He runs every morning before work." },
    { id: 2, term: "Jump", definition: "прыгать", example: "The kids like to jump on the trampoline." },
    { id: 3, term: "Eat", definition: "есть", example: "I usually eat lunch at noon." },
    { id: 4, term: "Drink", definition: "пить", example: "Drink a glass of water after the workout." },
    { id: 5, term: "Write", definition: "писать", example: "She writes emails to her friends every day." },
    { id: 6, term: "Read", definition: "читать", example: "I read a new book every week." },
    { id: 7, term: "Speak", definition: "говорить", example: "She speaks three languages fluently." },
  ],
  [
    { id: 1, term: "Red", definition: "красный", example: "I love the color red, it’s very vibrant." },
    { id: 2, term: "Blue", definition: "синий", example: "The sky is blue today." },
    { id: 3, term: "Circle", definition: "круг", example: "Draw a circle on the paper." },
    { id: 4, term: "Square", definition: "квадрат", example: "The table has a square shape." },
    { id: 5, term: "Green", definition: "зелёный", example: "The grass is green in the spring." },
  ],
  [
    { id: 1, term: "Morning", definition: "утро", example: "I wake up early in the morning." },
    { id: 2, term: "Afternoon", definition: "день", example: "Let’s meet in the afternoon." },
    { id: 3, term: "Night", definition: "ночь", example: "He works late into the night." },
    { id: 4, term: "First", definition: "первый", example: "She finished first in the race." },
    { id: 5, term: "Second", definition: "второй", example: "He came in second place." },
    { id: 6, term: "Third", definition: "третий", example: "She got third place in the competition." },
  ],
  [
    { id: 1, term: "Happiness", definition: "счастье", example: "Her face showed pure happiness." },
    { id: 2, term: "Anger", definition: "гнев", example: "His anger was evident when he yelled." },
    { id: 3, term: "Surprise", definition: "удивление", example: "The gift left me in surprise." },
    { id: 4, term: "Sadness", definition: "печаль", example: "She couldn’t hide her sadness after the loss." },
    { id: 5, term: "Fear", definition: "страх", example: "He faced his fear of heights and climbed the mountain." },
    { id: 6, term: "Joy", definition: "радость", example: "The news brought a lot of joy to her family." },
    { id: 7, term: "Excitement", definition: "волнение", example: "She felt excitement before her performance." },
  ]
];

const dataSets: SetType[] = [
  { id: 1, title: "Basic Vocabulary", description: "", cards: dataCards[0], },
  { id: 2, title: "Common Phrases", description: "", cards: dataCards[1], },
  { id: 3, title: "Travel Essentials", description: "", cards: dataCards[2], },
  { id: 4, title: "Daily Conversations", description: "", cards: dataCards[3], },
  { id: 5, title: "Business Terms", description: "", cards: dataCards[4], },
  { id: 6, title: "Idioms and Slang", description: "", cards: dataCards[5], },
  { id: 7, title: "Academic Vocabulary", description: "", cards: dataCards[6], },
  { id: 8, title: "Food and Dining", description: "", cards: dataCards[7], },
  { id: 9, title: "Shopping Phrases", description: "", cards: dataCards[8], },
  { id: 10, title: "Weather Vocabulary", description: "", cards: dataCards[9], },
  { id: 11, title: "Descriptive Adjectives", description: "", cards: dataCards[10], },
  { id: 12, title: "Verbs in Action", description: "", cards: dataCards[11], },
  { id: 13, title: "Colors and Shapes", description: "", cards: dataCards[12], },
  { id: 14, title: "Time and Numbers", description: "", cards: dataCards[13], },
  { id: 15, title: "Expressions of Emotion", description: "", cards: dataCards[14], },
];

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@snapcards.com' },
    update: {},
    create: {
      email: 'admin@snapcards.com',
      name: 'Admin L',
      CardSets: {
        create: [
          {
            title: 'Server Basic Vocabulary',
            description: 'Topic: Server Basic Vocabulary',
            cards: {
              create: [
                { term: "apple", definition: "яблоко" },
                { term: "book", definition: "книга" },
                { term: "car", definition: "машина" },
                { term: "dog", definition: "собака" },
                { term: "house", definition: "дом" },
                { term: "pen", definition: "ручка" },
                { term: "chair", definition: "стул" },
                { term: "phone", definition: "телефон" },
                { term: "school", definition: "школа" },
                { term: "table", definition: "стол" },
                { term: "water", definition: "вода" },
                { term: "window", definition: "окно" },
              ]
            }
          },
          {
            title: 'Common Phrases',
            description: 'Topic: Common Phrases',
            cards: {
              create: [
                { term: "How are you?", definition: "Как дела?" },
                { term: "Good morning", definition: "Доброе утро" },
                { term: "Thank you", definition: "Спасибо" },
                { term: "Excuse me", definition: "Извините" },
                { term: "I'm sorry", definition: "Простите" },
                { term: "You're welcome", definition: "Пожалуйста" },
                { term: "See you later", definition: "Увидимся позже" },
                { term: "Can you help me?", definition: "Можете мне помочь?" },
                { term: "How much is this?", definition: "Сколько это стоит?" },
                { term: "What's your name?", definition: "Как вас зовут?" },
                { term: "Nice to meet you", definition: "Приятно познакомиться" },
                { term: "Where are you from?", definition: "Откуда вы?" },
                { term: "I don't understand", definition: "Я не понимаю" },
                { term: "Can you repeat?", definition: "Можете повторить?" },
                { term: "Please", definition: "Пожалуйста" },
              ]
            }
          },
          {
            title: 'Travel Essentials',
            description: 'Topic: Travel Essentials',
            cards: {
              create: [
                { term: "passport", definition: "паспорт" },
                { term: "ticket", definition: "билет" },
                { term: "hotel", definition: "отель" },
                { term: "luggage", definition: "багаж" },
                { term: "plane", definition: "самолет" },
                { term: "map", definition: "карта" },
                { term: "guide", definition: "гид" },
                { term: "check-in", definition: "регистрация" },
              ]
            }
          },
          {
            title: 'Daily Conversations',
            description: 'Topic: Daily Conversations',
            cards: {
              create: [
                { term: "hello", definition: "привет" },
                { term: "please", definition: "пожалуйста" },
                { term: "yes", definition: "да", },
                { term: "no", definition: "нет", },
                { term: "thank you", definition: "спасибо" },
                { term: "goodbye", definition: "до свидания" },
                { term: "excuse me", definition: "извините" },
                { term: "good night", definition: "спокойной ночи" },
                { term: "I'm sorry", definition: "мне жаль" },
                { term: "what time is it?", definition: "который час?" },
              ]
            }
          },
          {
            title: 'Business Terms',
            description: 'Topic: Business Terms',
            cards: {
              create: [
                { term: "meeting", definition: "встреча" },
                { term: "deadline", definition: "срок" },
                { term: "presentation", definition: "презентация" },
                { term: "agenda", definition: "повестка дня" },
                { term: "client", definition: "клиент" },
                { term: "contract", definition: "контракт" },
                { term: "proposal", definition: "предложение" },
                { term: "salary", definition: "зарплата" },
                { term: "teamwork", definition: "командная работа" },
                { term: "project", definition: "проект" },
                { term: "strategy", definition: "стратегия" },
                { term: "budget", definition: "бюджет" },
                { term: "email", definition: "электронная почта" },
                { term: "feedback", definition: "обратная связь" },
                { term: "negotiation", definition: "переговоры" },
                { term: "task", definition: "задача" },
                { term: "deadline", definition: "срок выполнения" },
                { term: "colleague", definition: "коллега" },
              ]
            }
          }
        ]
      }
    }
  });

  const admin2 = await prisma.user.upsert({
    where: { email: 'admin2@snapcards.com' },
    update: {},
    create: {
      email: 'admin2@snapcards.com',
      name: 'Admin K',
      CardSets: {
        create: [
          {
            title: 'Idioms and Slang',
            description: 'Topic: Idioms and Slang',
            cards: {
              create: [
                { term: "break the ice", definition: "разрядить обстановку" },
                { term: "piece of cake", definition: "проще простого" },
                { term: "spill the beans", definition: "разболтать секрет" },
                { term: "hit the nail on the head", definition: "попасть в точку" },
                { term: "under the weather", definition: "нездоровится" },
                { term: "costs an arm and a leg", definition: "стоить целое состояние" },
                { term: "bite the bullet", definition: "принять трудное решение" },
                { term: "let the cat out of the bag", definition: "выдать секрет" },
                { term: "kick the bucket", definition: "умереть" },
                { term: "burn the midnight oil", definition: "работать допоздна" },
                { term: "call it a day", definition: "закончить на сегодня" },
                { term: "on cloud nine", definition: "на седьмом небе от счастья" },
                { term: "break a leg", definition: "ни пуха ни пера" },
                { term: "the ball is in your court", definition: "всё зависит от тебя" },
                { term: "under the thumb", definition: "под контролем" },
                { term: "by the skin of your teeth", definition: "едва-едва" },
                { term: "over the moon", definition: "очень счастлив" },
                { term: "hit the road", definition: "отправиться в путь" },
                { term: "pull someone’s leg", definition: "подшутить над кем-то" },
                { term: "a blessing in disguise", definition: "нет худа без добра" },
              ]
            }
          },
          {
            title: 'Academic Vocabulary',
            description: 'Topic: Academic Vocabulary',
            cards: {
              create: [
                { term: "hypothesis", definition: "гипотеза" },
                { term: "analysis", definition: "анализ" },
                { term: "theory", definition: "теория" },
                { term: "research", definition: "исследование" },
                { term: "evidence", definition: "доказательство" },
                { term: "variable", definition: "переменная" },
                { term: "methodology", definition: "методология" },
                { term: "data", definition: "данные" },
                { term: "experiment", definition: "эксперимент" },
                { term: "observation", definition: "наблюдение" },
                { term: "conclusion", definition: "вывод" },
                { term: "phenomenon", definition: "явление" },
                { term: "analysis", definition: "анализ" },
                { term: "correlation", definition: "корреляция" },
              ]
            }
          },
          {
            title: 'Food and Dining',
            description: 'Topic: Food and Dining',
            cards: {
              create: [
                { term: "breakfast", definition: "завтрак" },
                { term: "lunch", definition: "обед" },
                { term: "dinner", definition: "ужин" },
                { term: "appetizer", definition: "закуска" },
                { term: "dessert", definition: "десерт" },
                { term: "menu", definition: "меню" },
                { term: "fork", definition: "вилка" },
                { term: "spoon", definition: "ложка" },
                { term: "knife", definition: "нож" },
              ]
            }
          },
          {
            title: 'Shopping Phrases',
            description: 'Topic: Shopping Phrases',
            cards: {
              create: [
                { term: "price", definition: "цена" },
                { term: "discount", definition: "скидка" },
                { term: "cash", definition: "наличные" },
                { term: "receipt", definition: "чек" },
                { term: "sale", definition: "распродажа" },
                { term: "shop", definition: "магазин" },
                { term: "clothes", definition: "одежда" },
                { term: "size", definition: "размер" },
                { term: "fitting room", definition: "примерочная" },
                { term: "refund", definition: "возврат" },
                { term: "cashier", definition: "кассир" },
              ]
            }
          },
          {
            title: 'Weather Vocabulary',
            description: 'Topic: Weather Vocabulary',
            cards: {
              create: [
                { term: "Sunny", definition: "солнечно" },
                { term: "Rainy", definition: "дождливо" },
                { term: "Snowy", definition: "снежно" },
                { term: "Windy", definition: "ветрено" },
                { term: "Cloudy", definition: "облачно" },
                { term: "Stormy", definition: "шторм" },
                { term: "Hot", definition: "жарко" },
              ]
            }
          },
        ]
      }
    }
  });

  console.log({ admin, admin2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });

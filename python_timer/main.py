# Для создания телеграм-бота, который будет отправлять в
# беседу слово, которое было введено, вы можете использовать
# язык программирования Python и библиотеку python-telegram-bot.
# Вот пример кода:

# python
from telegram.ext import Updater, MessageHandler, Filters

# Функция, которая будет вызываться при получении нового сообщения
def echo(update, context):
    # Получаем текст сообщения
    message_text = update.message.text

    # Отправляем сообщение в беседу
    context.bot.send_message(chat_id=update.message.chat_id, text=message_text)

# Создаем экземпляр Updater и передаем ему токен вашего бота
updater = Updater(token='YOUR_BOT_TOKEN', use_context=True)

# Получаем диспетчер для регистрации обработчиков
dispatcher = updater.dispatcher

# Регистрируем обработчик для текстовых сообщений
echo_handler = MessageHandler(Filters.text & (~Filters.command), echo)
dispatcher.add_handler(echo_handler)

# Запускаем бота
updater.start_polling()

Вам необходимо заменить 'YOUR_BOT_TOKEN' на токен вашего бота,
который вы получите от BotFather в процессе создания бота.
Затем вы можете запустить этот код на своем сервере или локальной машине.
После запуска бот будет отвечать на все текстовые сообщения,
отправляя обратно слово или фразу, которую вы ввели

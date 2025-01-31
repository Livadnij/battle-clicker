const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    tg,
    tg_username: tg.initDataUnsafe?.user?.username || "user",
    tg_user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
  };
}

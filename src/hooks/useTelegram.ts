const tg = window.Telegram.WebApp!;

type TelegramUserUnsafe = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
};

export function useTelegram() {
  const userExists = !!tg?.initDataUnsafe?.user;
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
    tg_username: userExists ? tg.initDataUnsafe.user.username : null,
    tg_user: userExists ? (tg.initDataUnsafe.user as TelegramUserUnsafe) : null,
    onClose,
    onToggleButton,
  };
}

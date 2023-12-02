import cn from 'classnames';
import { ReactComponent as OrangeAVMIcon } from 'assets/icons/orangeAVM.svg';
import ToggleButton from 'components/ToggleButton';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import { Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import type { AppHeaderProps } from './AppHeader.type';
import { MENU_CONSTANTS } from './AppHeader.constants';

import styles from './AppHeader.module.scss';

export default function AppHeader({
  activeMenuItem,
  historyPush,
}: AppHeaderProps) {
  return (
    <header className={styles.app_header}>
      <div className={styles.app_header__bar}>
        <OrangeAVMIcon />
        <div className={styles.app_header__navigation}>
          <ToggleButtonGroup
            onChange={historyPush}
            value={activeMenuItem}
            isWithoutDivider
          >
            {MENU_CONSTANTS.map((el) => (
              <ToggleButton key={el.value} value={el.value}>
                {el.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      </div>

      <div className={styles.app_header__info}>
        <div className={styles.user}>
          <Button type={'text'} data-testid={'profileButton'}>
            <UserOutlined />
          </Button>
        </div>
        <div className={cn(styles.user, styles.user__logout)}>
          <Button data-testid={'logoutPopoverButton'} type={'text'}>
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    </header>
  );
}
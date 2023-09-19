import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ROUTE } from 'src/app/shared/const/route';

@Component({
  selector: 'app-agent-ranking',
  templateUrl: './agent-ranking.component.html',
  styleUrls: ['./agent-ranking.component.scss'],
})
export class AgentRankingComponent  implements OnInit {
  readonly shareIconLink: string = 'assets/icon/setting-page';

  listMenus: { [key: string]: {iconLink: string, text: string, url?: string}[] } = {
    "main-fnc": [
      {
        iconLink: `${this.shareIconLink}/method-login.svg`,
        text: 'Thay đổi cách đăng nhập'
      },
      {
        iconLink: `${this.shareIconLink}/change-password.svg`,
        text: 'Thay đổi mật khẩu'
      },
      {
        iconLink: `${this.shareIconLink}/manage-notification.svg`,
        text: 'Quản lí thông báo'
      },
      {
        iconLink: `${this.shareIconLink}/change-avatar.svg`,
        text: 'Thay đổi avatar và hình eCard'
      },
      {
        iconLink: `${this.shareIconLink}/ranking.svg`,
        text: 'Phân hạng Chubb Chiến',
        url: 'level'
      }
    ],
    "question-menu": [
      {
        iconLink: `${this.shareIconLink}/question.svg`,
        text: 'Những câu hỏi thường gặp'
      }
    ],
    "logout-menu": [
      {
        iconLink: `${this.shareIconLink}/logout.svg`,
        text: 'Đăng xuất'
      }
    ]
  };

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  goToPage(link: string|undefined) {
    if (link) {
      this.navCtrl.navigateForward(`${ROUTE.AGENT_RANK}/${link}`)
    }
  }
}

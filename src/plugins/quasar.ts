import {
	Quasar,
	QBtn,
	QLayout,
	QHeader,
	QDrawer,
	QPageContainer,
	QList,
	QItemLabel,
	QItem,
	QItemSection,
	QToolbar,
	QToolbarTitle,
	QIcon,
	QPage,
	QAvatar,
	QForm,
	QInput,
	QTooltip
} from "quasar";
import quasarUserOptions from "../quasar-user-options";

export function initQuasar(app: any) {
	app.component("QBtn", QBtn)
		.component("QLayout", QLayout)
		.component("QHeader", QHeader)
		.component("QDrawer", QDrawer)
		.component("QPageContainer", QPageContainer)
		.component("QList", QList)
		.component("QItemLabel", QItemLabel)
		.component("QToolbar", QToolbar)
		.component("QToolbarTitle", QToolbarTitle)
		.component("QItem", QItem)
		.component("QItemSection", QItemSection)
		.component("QIcon", QIcon)
		.component("QPage", QPage)
		.component("QAvatar", QAvatar)
		.component("QForm", QForm)
		.component("QInput", QInput)
		.component("QTooltip", QTooltip)
		.use(Quasar, quasarUserOptions);
}

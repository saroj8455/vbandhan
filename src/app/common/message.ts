import { MenuItem } from "primeng/api";

export const Greet = "Welcome";
export const MENU_ITEM:MenuItem[] = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left',
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right',
      },
      {
        label: 'Center',
        icon: 'pi pi-fw pi-align-center',
      },
      {
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify',
      },
    ],
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus',
        routerLink:"user/signup"

      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus',
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
      },
    ],
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off',
  },
];

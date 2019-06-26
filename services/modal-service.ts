class ModalController {

  modalCtrl: any;

  constructor() {
    this.modalCtrl = document.querySelector('ion-modal-controller');
  }

  getController() {
    return this.modalCtrl;
  }

}

export const ModalService = new ModalController();
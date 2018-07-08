import { observable, computed, action } from 'mobx';



class UserInfo {
    @observable userInfo;
    @action
    getUserInfo = (obj) => {
        if (!ojb) return;
        this.userInfo = obj;
    }
}



const store = new UserInfo();
export default store;
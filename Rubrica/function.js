export const qS = (el) => document.querySelector(el);
export const cE = (ele) => document.createElement(ele);
export const qA = (el) => document.querySelectorAll(el)
import {GET} from "./http.js";

let mainContact = qS(".main_container");
let escButton = cE("button");
escButton.className = "bx bx-x esc_btn";

let contacts = qS(".contacts");

let contactWrap = qS(".contacts_wrapper")





export const createContactsList = (obj) => {
    let contactsWrapper = cE("div");
    contactsWrapper.className = "contacts_container";
    

    let contactList = cE("div");
    contactList.className = "contact_list";
    contactList.setAttribute("id", obj.id);
    console.log(contactList);

    contactList.addEventListener("click", (e) => {
        let clickId = e.currentTarget.id;
        

        GET("/users").then((data)=> {
            // console.log(data);

            let cont = data.find((user)=>{
                return user.id == clickId
            })

        mainContact.textContent = "";
        mainContact.appendChild( createInfoUser(cont))

        mainContact.classList.add("display")
        contactWrap.classList.add("middle")
})
        
    })

    let iconContact = cE("div");
    iconContact.className = "icon_contact";
        let icon = cE("i");
        icon.className = "bx bx-user-circle icon";

    let infoContact = cE("div");
    infoContact.className = "info_contact";
        let contactName = cE("h3");
        contactName.className = "contact_name";
        contactName.textContent = obj.name;
        let contactPhone = cE("p");
        contactPhone.className = "contact_telnumber";
        contactPhone.textContent = obj.phone;

        let iconPoint = cE("div");
        iconPoint.className = "dots";
        let iconDots = cE("i");
        iconDots.className = "bx bx-dots-horizontal-rounded dots";

        
        // escButton.textContent = ""

    iconContact.append(icon);
    infoContact.append(contactName, contactPhone);
    // iconPoint.append(iconDots)

    contactList.append(iconContact, infoContact);

    contactsWrapper.append(contactList);

    return contactsWrapper;
}



// Empty message
export const createEmptymessage = () => {
    let empty = cE("div");
    empty.className = "empty_contacts"

    let message = cE("h3");
    message.textContent= "La lista dei contatti è vuota";

    empty.append(message);

    return empty
}


// Section of user information
export const createInfoUser = (obj) => {


    let infoUserWrapper = cE("div");
    infoUserWrapper.className = "info_user";

    escButton.addEventListener("click", (e) => {
    
        // infoUserWrapper.remove();
        mainContact.classList.remove("display")
        contactWrap.classList.remove("middle")
    
    })


    let mainInfo = cE("div");
    mainInfo.className = "main_info";


    let profileImg = cE("div");
    profileImg.className = "profile_img";
    let image = cE("img");
    image.src = "https://cdn.vectorstock.com/i/preview-1x/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg";

    let infos = cE("div");
    infos.className = "infos";
    // let name = cE("p");
    // name.textContent = ;
    let username = cE("p");
    username.textContent = "@" + obj.username;



    let userInfo = cE("div");
    userInfo.className = "user_info";

    let nameDiv = cE("div");
    nameDiv.className = "info_box div1";
    let fullName = cE("i");
    fullName.className = "bx bx-user bxtitle"
    fullName.textContent = "  Name & Surname";
    let naming = cE("p");
    naming.textContent = obj.name;


    let addressDiv = cE("div");
    addressDiv.className = "info_box div2";
    let titleAddress = cE("i");
    titleAddress.textContent = "  Address";
    titleAddress.className = "bx bx-location-plus bxtitle";
    let address = cE("p");
    address.textContent = obj.address.city;

    let phoneDiv = cE("div");
    phoneDiv.className = "info_box div3";
    let titlePhone = cE("i");
    titlePhone.className = "bx bxs-phone bxtitle"
    titlePhone.textContent = "  Telephone";
    let phone = cE("p")
    phone.textContent = obj.phone;

    let mailDiv = cE("div");
    mailDiv.className = "info_box div4";
    let titleMail = cE("i");
    titleMail.className = "bx bx-envelope bxtitle"
    titleMail.textContent = "  Mail-address";
    let mail = cE("p")
    mail.textContent = obj.email;


    mailDiv.append(titleMail, mail);
    phoneDiv.append(titlePhone, phone)
    addressDiv.append(titleAddress, address);
    nameDiv.append(fullName, naming)

    userInfo.append(nameDiv, addressDiv, phoneDiv, mailDiv);

    infos.append(username);
    profileImg.append(image);

    mainInfo.append(profileImg, infos);

    infoUserWrapper.append(mainInfo, userInfo, escButton)
    

    return infoUserWrapper

}



import {object, string} from "yup"

const minCharacterInMessage = 3
const requiredMessage = "Bu alan zorunludur."
const minMessage = `En az ${minCharacterInMessage} karakter giriniz.`
const emailMessage = "Geçerli bir email adresi giriniz."
const contactSchema = object({
    name: string().required(requiredMessage),
    email:string().email(emailMessage).required(requiredMessage),
    message: string().required(requiredMessage).min(minCharacterInMessage, minMessage)

})

export default contactSchema
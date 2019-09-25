import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Home: "Home",
        Product: "Product",
        SignIn: "SignIn",
        Register: "Register",
        items: "items",
        Explore: "Explore",
        Error: "Error",
        Loading: "Loading",
        Login: "Login",
        LoginDetail: "Get access to your Orders, Wishlist and Recommendations",
        Mycart: "My cart",
        Item: "item",
        NoItem: "No items in your cart",
        FavItem: "your favourite items are just click away",
        PromoApplied : "Promo can be applied on payment page",
        ProceedCheckout: "Proceed to checkout",
        StartShopping: "Start Shopping",
        RS: "Rs",
        BuyNowPrice: "Buy Now @ Rs",
        BuyNow: "Buy Now",
        BuyRs: "MRP Rs",
        Signup: "Signup",
        SignupDetail: "We do not share your personal details with anyone",
        LowestPrice: "You won't find cheaper anywhere",
        EmailReq: "*Please enter your email id.",
        EmailIdValid: "*Please enter valid email id.",
        PasswordReq: "*Please enter your password.",
        PasswordPattern: "*Password must contain at least one numeric digit, one letter, min 6 characters with no space.",
        Email: "Email",
        Password: "Password",
        fnameReq : "*Please enter your first name.",
        lnameReq :"*Please enter your last name.",
        confirmPassword: "*Please enter your confirm password.",
        SamePassword: "Password should be same as confirm password.",
        fname: "First Name",
        lname: "Last Name",
        ConPassword: "Confirm Password"


      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;

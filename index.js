const fromAmountElement = document.querySelector(".amount")
const convertedAmountElement = document.querySelector(".convertedAmount")
const toCurrencyElement = document.querySelector(".toCurrency")
const fromCurrencyElement = document.querySelector(".fromCurrency")
const resultElement = document.querySelector(".result")

resultElement.textContent = "Fetching data..."

const countries = [
    { code: "AFN", name: "Afghan Afghani" },
    { code: "ALL", name: "Albanian Lek" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "AOA", name: "Angolan Kwanza" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "AMD", name: "Armenian Dram" },
    { code: "AWG", name: "Aruban Florin" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "AZN", name: "Azerbaijani Manat" },
    { code: "BSD", name: "Bahamian Dollar" },
    { code: "BHD", name: "Bahraini Dinar" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "BBD", name: "Barbadian Dollar" },
    { code: "BYN", name: "Belarusian Ruble" },
    { code: "BZD", name: "Belize Dollar" },
    { code: "BMD", name: "Bermudian Dollar" },
    { code: "BTN", name: "Bhutanese Ngultrum" },
    { code: "BOB", name: "Bolivian Boliviano" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
    { code: "BWP", name: "Botswana Pula" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "BND", name: "Brunei Dollar" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "BIF", name: "Burundian Franc" },
    { code: "KHR", name: "Cambodian Riel" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CVE", name: "Cape Verdean Escudo" },
    { code: "KYD", name: "Cayman Islands Dollar" },
    { code: "XOF", name: "CFA Franc BCEAO" },
    { code: "XAF", name: "CFA Franc BEAC" },
    { code: "XPF", name: "CFP Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "KMF", name: "Comorian Franc" },
    { code: "CDF", name: "Congolese Franc" },
    { code: "CRC", name: "Costa Rican Colón" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "CUP", name: "Cuban Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "DJF", name: "Djiboutian Franc" },
    { code: "DOP", name: "Dominican Peso" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "ERN", name: "Eritrean Nakfa" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "EUR", name: "Euro" },
    { code: "FKP", name: "Falkland Islands Pound" },
    { code: "FJD", name: "Fijian Dollar" },
    { code: "GMD", name: "Gambian Dalasi" },
    { code: "GEL", name: "Georgian Lari" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "GIP", name: "Gibraltar Pound" },
    { code: "GTQ", name: "Guatemalan Quetzal" },
    { code: "GNF", name: "Guinean Franc" },
    { code: "GYD", name: "Guyanaese Dollar" },
    { code: "HTG", name: "Haitian Gourde" },
    { code: "HNL", name: "Honduran Lempira" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "ISK", name: "Icelandic Króna" },
    { code: "INR", name: "Indian Rupee" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "IRR", name: "Iranian Rial" },
    { code: "IQD", name: "Iraqi Dinar" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "JMD", name: "Jamaican Dollar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "JOD", name: "Jordanian Dinar" },
    { code: "KZT", name: "Kazakhstani Tenge" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "KPW", name: "North Korean Won" },
    { code: "KRW", name: "South Korean Won" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "KGS", name: "Kyrgyzstani Som" },
    { code: "LAK", name: "Lao Kip" },
    { code: "LBP", name: "Lebanese Pound" },
    { code: "LSL", name: "Lesotho Loti" },
    { code: "LRD", name: "Liberian Dollar" },
    { code: "LYD", name: "Libyan Dinar" },
    { code: "MOP", name: "Macanese Pataca" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "MGA", name: "Malagasy Ariary" },
    { code: "MWK", name: "Malawian Kwacha" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "MVR", name: "Maldivian Ruf" },
    { code: "MVR", name: "Maldivian Rufiyaa" },
    { code: "MRO", name: "Mauritanian Ouguiya" },
    { code: "MUR", name: "Mauritian Rupee" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MDL", name: "Moldovan Leu" },
    { code: "MNT", name: "Mongolian Tugrik" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "MMK", name: "Myanmar Kyat" },
    { code: "NAD", name: "Namibian Dollar" },
    { code: "NPR", name: "Nepalese Rupee" },
    { code: "ANG", name: "Netherlands Antillean Guilder" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "NIO", name: "Nicaraguan Córdoba" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "OMR", name: "Omani Rial" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "PAB", name: "Panamanian Balboa" },
    { code: "PGK", name: "Papua New Guinean Kina" },
    { code: "PYG", name: "Paraguayan Guarani" },
    { code: "PEN", name: "Peruvian Nuevo Sol" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "QAR", name: "Qatari Rial" },
    { code: "RON", name: "Romanian Leu" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "RWF", name: "Rwandan Franc" },
    { code: "SHP", name: "Saint Helena Pound" },
    { code: "WST", name: "Samoan Tala" },
    { code: "STD", name: "São Tomé and Príncipe Dobra" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "RSD", name: "Serbian Dinar" },
    { code: "SCR", name: "Seychellois Rupee" },
    { code: "SLL", name: "Sierra Leonean Leone" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "SBD", name: "Solomon Islands Dollar" },
    { code: "SOS", name: "Somali Shilling" },
    { code: "ZAR", name: "South African Rand" },
    { code: "SSP", name: "South Sudanese Pound" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "SDG", name: "Sudanese Pound" },
    { code: "SRD", name: "Surinamese Dollar" },
    { code: "SZL", name: "Swazi Lilangeni" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "SYP", name: "Syrian Pound" },
    { code: "TWD", name: "Taiwan Dollar" },
    { code: "TJS", name: "Tajikistani Somoni" },
    { code: "TZS", name: "Tanzanian Shilling" },
    { code: "THB", name: "Thai Baht" },
    { code: "TOP", name: "Tongan Pa'anga" },
    { code: "TTD", name: "Trinidad and Tobago Dollar" },
    { code: "TND", name: "Tunisian Dinar" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "TMT", name: "Turkmenistan Manat" },
    { code: "UGX", name: "Ugandan Shilling" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "UYU", name: "Uruguayan Peso" },
    { code: "UZS", name: "Uzbekistani Som" },
    { code: "VUV", name: "Vanuatu Vatu" },
    { code: "VES", name: "Venezuelan Bolívar" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "YER", name: "Yemeni Rial" },
    { code: "ZMW", name: "Zambian Kwacha" },
    { code: "ZWL", name: "Zimbabwean Dollar" },
    { code: "USD", name: "United States Dollar" },
    { code: "AFN", name: "Afghan Afghani" },
    { code: "ALL", name: "Albanian Lek" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "AOA", name: "Angolan Kwanza" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "AMD", name: "Armenian Dram" },
    { code: "AWG", name: "Aruban Florin" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "AZN", name: "Azerbaijani Manat" },
    { code: "BSD", name: "Bahamian Dollar" },
    { code: "BHD", name: "Bahraini Dinar" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "BBD", name: "Barbadian Dollar" },
    { code: "BYN", name: "Belarusian Ruble" },
    { code: "BZD", name: "Belize Dollar" },
    { code: "BMD", name: "Bermudian Dollar" },
    { code: "BTN", name: "Bhutanese Ngultrum" },
    { code: "BOB", name: "Bolivian Boliviano" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
    { code: "BWP", name: "Botswana Pula" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "BND", name: "Brunei Dollar" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "BIF", name: "Burundian Franc" },
    { code: "KHR", name: "Cambodian Riel" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CVE", name: "Cape Verdean Escudo" },
    { code: "KYD", name: "Cayman Islands Dollar" },
    { code: "XOF", name: "CFA Franc BCEAO" },
    { code: "XAF", name: "CFA Franc BEAC" },
    { code: "XPF", name: "CFP Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "KMF", name: "Comorian Franc" },
    { code: "CDF", name: "Congolese Franc" },
    { code: "CRC", name: "Costa Rican Colón" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "CUP", name: "Cuban Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "DJF", name: "Djiboutian Franc" },
    { code: "DOP", name: "Dominican Peso" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "ERN", name: "Eritrean Nakfa" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "EUR", name: "Euro" },
    { code: "FKP", name: "Falkland Islands Pound" },
    { code: "FJD", name: "Fijian Dollar" },
    { code: "GMD", name: "Gambian Dalasi" },
    { code: "GEL", name: "Georgian Lari" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "GIP", name: "Gibraltar Pound" },
    { code: "GTQ", name: "Guatemalan Quetzal" },
    { code: "GNF", name: "Guinean Franc" },
    { code: "GYD", name: "Guyanaese Dollar" },
    { code: "HTG", name: "Haitian Gourde" },
    { code: "HNL", name: "Honduran Lempira" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "ISK", name: "Icelandic Króna" },
    { code: "INR", name: "Indian Rupee" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "IRR", name: "Iranian Rial" },
    { code: "IQD", name: "Iraqi Dinar" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "JMD", name: "Jamaican Dollar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "JOD", name: "Jordanian Dinar" },
    { code: "KZT", name: "Kazakhstani Tenge" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "KPW", name: "North Korean Won" },
    { code: "KRW", name: "South Korean Won" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "KGS", name: "Kyrgyzstani Som" },
    { code: "LAK", name: "Lao Kip" },
    { code: "LBP", name: "Lebanese Pound" },
    { code: "LSL", name: "Lesotho Loti" },
    { code: "LRD", name: "Liberian Dollar" },
    { code: "LYD", name: "Libyan Dinar" },
    { code: "MOP", name: "Macanese Pataca" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "MGA", name: "Malagasy Ariary" },
    { code: "MWK", name: "Malawian Kwacha" },



];



countries.forEach(country => {
    const option1 = document.createElement('option');
    option1.value = country.code;
    option1.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);


    const option2 = document.createElement('option');
    option2.value = country.code;
    option2.textContent = `${country.code} (${country.name})`;
    toCurrencyElement.appendChild(option2);


    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR"
});

////////////

const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    try {


        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const conversionRate = data.rates[toCurrency];

        const convertedAmount = (amount * conversionRate).toFixed(2);

        convertedAmountElement.value = convertedAmount
        resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`

    }
    catch (error) {
        resultElement.textContent = "error"

    }
}
fromAmountElement.addEventListener('input', getExchangeRate)





fromAmountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);

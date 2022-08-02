import React from 'react';
import { Icon } from '@iconify/react';
import paypal from './Assets/images/Paypal-logo-500x281.png'
import visa from './Assets/images/visa-logo-800x450.webp'
import master from './Assets/images/ca0c7039ddcf224cb6b075cb59e4677e.png'
import maestro from './Assets/images/Maestro_2016.svg.png'
import discover from './Assets/images/Discover-logo.png'
import ideal from './Assets/images/IDEAL_Logo.png'
import inpost from './Assets/images/inpost-logo-F04BCA29D0-seeklogo.com.png'
import dpd from './Assets/images/2560px-DPD_logo_(2015).svg.png'
import dhl from './Assets/images/DHL-Emblem.png'
import fedex from './Assets/images/SFJxCXKMZihnZsVnn3LoEk.jpg'
import model1 from './Assets/images/106852801-side-view-of-smiling-man-in-linen-white-shirt-isolated-on-grey-background.webp'
import model2 from './Assets/images/male-models-marlon.webp'

const Body = () => {
    return (
        <div className='mx-10'>
            <div className='flex justify-between'><span className='font-bold my-10'>Shipping and Payment</span><div className='flex items-center'><span className='border rounded-full p-2 border-success'><Icon icon="ant-design:shopping-cart-outlined" /></span><span className='w-16 border bg-slate-500 border-slate-500 border-rounded mx-3'></span><span className='border rounded-full p-2 border-success bg-success text-white'><Icon icon="carbon:delivery-truck" hFlip={true} /></span></div></div>
            <section className='grid grid-cols-3 gap-10'>
                <div>
                    <div>
                        <button className="btn btn-success rounded-full text-white px-10">LOG IN</button><button className="btn btn-outline rounded-full px-10 ml-5">SIGN UP </button>
                    </div>
                    <h4 className='mt-8 mb-4'>Shipping information</h4>
                    <form action="" className='grid grid-cols-2 gap-4'>
                        <input className="border rounded-full px-5 py-2" type="Email" placeholder='Email' /><input className="border rounded-full px-5 py-2" type="text" placeholder='Address' /><input className="border rounded-full px-5 py-2" type="text" placeholder='First name' /><input className="border rounded-full px-5 py-2" type="text" placeholder='City' /><input className="border rounded-full px-5 py-2" type="text" placeholder='Last name' /><input className="border rounded-full px-5 py-2" type="number" placeholder='Postal Code / ZIP' /><input className="border rounded-full px-5 py-2" type="phone" placeholder='Phone number' />
                        <select className="border rounded-full px-5 py-2" id="country" name="country">
                            <option>Poland</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic of the Congo</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curacao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and Mcdonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthelemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="CS">Serbia and Montenegro</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.s.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                    </form>
                </div>
                <div>
                    <div>
                        <h4 className='mb-4'>Payment method</h4>
                        <div className='grid grid-cols-3 gap-2 '>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200"><img src={paypal} alt="" className='w-10' /></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200"><img src={visa} alt="" className='w-10' /></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200"><img src={master} alt="" className='w-10' /></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200"><img src={maestro} alt="" className='w-10' /></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200"><img src={discover} alt="" className='w-10' /></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200"><img src={ideal} alt="" className='w-10' /></a >
                        </div>
                    </div>
                    <div>
                        <h4 className='mb-4 mt-8'>Delivery method</h4>
                        <div className='grid grid-cols-2 gap-2 '>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200 hover:text-black"><img src={inpost} alt="" className='w-10' /><span>$20.00</span></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200 hover:text-black"><img src={dpd} alt="" className='w-10' /><span>$12.00</span></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200 hover:text-black"><img src={dhl} alt="" className='w-10' /><span>$15.00</span></a>
                            <a href='/' className="btn btn-outline rounded-full hover:bg-white hover:border-orange-400 border-slate-200 hover:text-black"><img src={fedex} alt="" className='w-10' /><span>$10.00</span></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-10/12'>
                        <h4 className='mb-4 ml-6'>Your cart</h4>
                        <div className='flex items-center mb-5 justify-evenly'>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src={model1} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3>T-shirt <br /> Summer Vibes</h3>
                                <small>#261311</small>
                            </div>
                            <b>$89.99</b>
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <img src={model2} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3>T-shirt <br /> Summer Vibes</h3>
                                <small>#261311</small>
                            </div>
                            <b>$89.99</b>
                        </div>
                        <div className='border rounded-full w-8/12 flex justify-evenly bg-gray-100 my-10 mx-auto py-2'><span>Total cost</span> <b>$159.98</b></div>
                        <div className='flex items-center justify-center mb-10'><Icon icon="carbon:delivery-truck" /><p className='ml-5'>You are $30.02 away <br /> from the shipping!</p></div>
                    </div>
                </div>
            </section>
            <div className='flex justify-between items-center'>
                <a href='/' className='flex justify-between items-center'><Icon icon="gg:arrow-long-left" /><span className='ml-4'>Back</span></a>
                <div>
                    <button className="btn btn-outline px-12  rounded-full">CONTINUE SHOPPING</button>
                    <button className="btn btn-success px-12  rounded-full ml-5 text-white">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Body;
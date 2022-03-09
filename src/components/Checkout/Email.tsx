// import React, {useContext, useState} from 'react';
// import classes from './Confirmation.module.css';
// import CartContext from '../../store/cart-context';
// import {Box} from "@mui/material";
// import ConfirmationItem from "./ConfirmationItem";
//
// const Email = (props) => {
//     <div className="es-wrapper-color">
//         <table className="es-wrapper" width="100%" cellSpacing="0" cellPadding="0">
//             <tr>
//                 <td valign="top">
//                     <table cellPadding="0" cellSpacing="0" className="es-content" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table className="es-content-body"
//                                        style={{"backgroundColor": "transparent"}}
//                                        width="600" cellSpacing="0" cellPadding="0" bgcolor="rgba(0, 0, 0, 0)"
//                                        align="center" data-darkreader-inline-bgcolor>
//                                     <tr>
//                                         <td className="es-p10" align="left">
//                                             <table className="es-left" cellSpacing="0" cellPadding="0" align="left">
//                                                 <tr>
//                                                     <td width="280" align="left">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td className="es-infoblock" align="left">
//                                                                     <p>Put your preheader text here</p>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <table className="es-right" cellSpacing="0" cellPadding="0" align="right">
//                                                 <tr>
//                                                     <td width="280" align="left">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="right" className="es-infoblock">
//                                                                     <p><a href="https://viewstripo.email/Email.tsx"
//                                                                           className="view" style=" target=" _blank>View
//                                                                         in browser</a></p>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             </tr>
//                                             </table>
//                                             <![endif]-->
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-header" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table className="es-header-body" width="600" cellSpacing="0" cellPadding="0"
//                                        bgcolor="#ffffff" align="center" data-darkreader-inline-bgcolor
//                                        style="--darkreader-inline-bgcolor:#181a1b">
//                                     <tr>
//                                         <td className="es-p20t es-p10b es-p20r es-p20l"
//                                             style="background-position: center center" align="left">
//                                             <!--[if mso]>
//                                             <table width="560" cellpadding="0" cellspacing="0">
//                                                 <tr>
//                                                     <td width="270" valign="top">
//                                             <![endif]-->
//                                             <table className="es-left" cellSpacing="0" cellPadding="0" align="left">
//                                                 <tr>
//                                                     <td className="es-m-p20b" width="270" align="left">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td className="es-p5b" align="left" style="font-size:0">
//                                                                     <a target="_blank"
//                                                                        href="https://viewstripo.email/Email.tsx">
//                                                                         <amp-img
//                                                                             src="https://udpktq.stripocdn.email/content/guids/CABINET_c6d6983b8f90c1ab10065255fbabfbaf/images/25481556884114471.png"
//                                                                             alt style="display: block"
//                                                                             className="adapt-img" width="125"
//                                                                             height="43" layout="responsive"></amp-img>
//                                                                     </a>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             <td width="20"></td>
//                                             <td width="270" valign="top">
//                                             <![endif]-->
//                                             <table className="es-right" cellSpacing="0" cellPadding="0" align="right">
//                                                 <tr>
//                                                     <td width="270" align="left">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td>
//                                                                     <table className="es-menu" width="100%"
//                                                                            cellSpacing="0" cellPadding="0"
//                                                                            role="presentation">
//                                                                         <tr className="links">
//                                                                             <td className="es-p10t es-p10b es-p5r es-p5l"
//                                                                                 style="padding-bottom: 10px;padding-top: 10px;--darkreader-inline-bgcolor:transparent"
//                                                                                 width="33.33%" valign="top"
//                                                                                 bgcolor="transparent" align="center"
//                                                                                 data-darkreader-inline-bgcolor><a
//                                                                                 target="_blank"
//                                                                                 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                                 href="https://viewstripo.email/Email.tsx"
//                                                                                 data-darkreader-inline-color>Menus</a>
//                                                                             </td>
//                                                                             <td className="es-p10t es-p10b es-p5r es-p5l"
//                                                                                 style="padding-bottom: 10px;padding-top: 10px;--darkreader-inline-bgcolor:transparent"
//                                                                                 width="33.33%" valign="top"
//                                                                                 bgcolor="transparent" align="center"
//                                                                                 data-darkreader-inline-bgcolor><a
//                                                                                 target="_blank"
//                                                                                 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                                 href="https://viewstripo.email/Email.tsx"
//                                                                                 data-darkreader-inline-color>Delivery</a>
//                                                                             </td>
//                                                                             <td className="es-p10t es-p10b es-p5r es-p5l"
//                                                                                 style="padding-bottom: 10px;padding-top: 10px;--darkreader-inline-bgcolor:transparent"
//                                                                                 width="33.33%" valign="top"
//                                                                                 bgcolor="transparent" align="center"
//                                                                                 data-darkreader-inline-bgcolor><a
//                                                                                 target="_blank"
//                                                                                 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                                 href="tel:123456789"
//                                                                                 data-darkreader-inline-color>123456789</a>
//                                                                             </td>
//                                                                         </tr>
//                                                                     </table>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             </tr>
//                                             </table>
//                                             <![endif]-->
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-content" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding="0"
//                                        cellSpacing="0" width="600" data-darkreader-inline-bgcolor
//                                        style="--darkreader-inline-bgcolor:#181a1b">
//                                     <tr>
//                                         <td align="left" style="background-position: center top">
//                                             <table cellPadding="0" cellSpacing="0" width="100%">
//                                                 <tr>
//                                                     <td width="600" align="center" valign="top">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="center" style="position: relative">
//                                                                     <a target="_blank" href="https://viewstripo.email">
//                                                                         <amp-img className="adapt-img"
//                                                                                  src="https://udpktq.stripocdn.email/content/guids/bannerImgGuid/images/91191577364120504.png"
//                                                                                  alt title width="600" height="300"
//                                                                                  layout="responsive"></amp-img>
//                                                                     </a>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-content" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding="0"
//                                        cellSpacing="0" width="600" data-darkreader-inline-bgcolor
//                                        style="--darkreader-inline-bgcolor:#181a1b">
//                                     <tr>
//                                         <td className="es-p20t es-p20r es-p20l" align="left"
//                                             style="background-position: center top">
//                                             <table cellPadding="0" cellSpacing="0" width="100%">
//                                                 <tr>
//                                                     <td width="560" align="center" valign="top">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="center">
//                                                                     <h2 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color>Your order is on
//                                                                         its way</h2>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="center" className="es-p10t">
//                                                                     <p>Delivery of healthy food is the best solution for
//                                                                         business people. Who wants to eat right, look
//                                                                         healthy and work productively all day.</p>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="center"
//                                                                     className="es-p20t es-p20b es-p10r es-p10l"><span
//                                                                     className="es-button-border"><a
//                                                                     href="https://viewstripo.email/Email.tsx"
//                                                                     className="es-button es-button-3" target="_blank"
//                                                                     style="font-family: arial, 'helvetica neue', helvetica, sans-serif;border-width: 10px 20px">View order status</a></span>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="es-p20t es-p10b es-p20r es-p20l" align="left"
//                                             style="background-position: center top">
//                                             <!--[if mso]>
//                                             <table width="560" cellpadding="0" cellspacing="0">
//                                                 <tr>
//                                                     <td width="280" valign="top">
//                                             <![endif]-->
//                                             <table className="es-left" cellSpacing="0" cellPadding="0" align="left">
//                                                 <tr>
//                                                     <td className="es-m-p20b" width="280" align="left">
//                                                         <table
//                                                             style="border-left: 1px solid transparent;border-top: 1px solid transparent;border-bottom: 1px solid transparent;background-color: #efefef;border-collapse: separate;background-position: center top;--darkreader-inline-bgcolor:#212425;--darkreader-inline-border-left:transparent;--darkreader-inline-border-top:transparent;--darkreader-inline-border-bottom:transparent"
//                                                             width="100%" cellSpacing="0" cellPadding="0"
//                                                             bgcolor="#efefef" data-darkreader-inline-bgcolor
//                                                             data-darkreader-inline-border-left
//                                                             data-darkreader-inline-border-top
//                                                             data-darkreader-inline-border-bottom role="presentation">
//                                                             <tr>
//                                                                 <td className="es-p20t es-p10b es-p20r es-p20l"
//                                                                     align="left">
//                                                                     <h4 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color>SUMMARY:</h4>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="es-p20b es-p20r es-p20l" align="left">
//                                                                     <table style="width: 100%"
//                                                                            className="cke_show_border" cellSpacing="1"
//                                                                            cellPadding="1" border="0" align="left"
//                                                                            role="presentation">
//                                                                         <tr>
//                                                                             <td style="font-size: 14px;line-height: 21px">Order
//                                                                                 #:
//                                                                             </td>
//                                                                             <td><strong><span
//                                                                                 style="font-size: 14px;line-height: 21px">9844523</span></strong>
//                                                                             </td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td style="font-size: 14px;line-height: 21px">Order
//                                                                                 Date:
//                                                                             </td>
//                                                                             <td><strong><span
//                                                                                 style="font-size: 14px;line-height: 21px">May&nbsp;21, 2019</span></strong>
//                                                                             </td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td style="font-size: 14px;line-height: 21px">Order
//                                                                                 Total:
//                                                                             </td>
//                                                                             <td><strong><span
//                                                                                 style="font-size: 14px;line-height: 21px">$22.00</span></strong>
//                                                                             </td>
//                                                                         </tr>
//                                                                     </table>
//                                                                     <p style="line-height: 150%"><br></p>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             <td width="0"></td>
//                                             <td width="280" valign="top">
//                                             <![endif]-->
//                                             <table className="es-right" cellSpacing="0" cellPadding="0" align="right">
//                                                 <tr>
//                                                     <td width="280" align="left">
//                                                         <table
//                                                             style="border-width: 1px;border-style: solid;border-color: transparent;background-color: #efefef;border-collapse: separate;background-position: center top;--darkreader-inline-bgcolor:#212425;--darkreader-inline-border-left:transparent;--darkreader-inline-border-right:transparent;--darkreader-inline-border-top:transparent;--darkreader-inline-border-bottom:transparent"
//                                                             width="100%" cellSpacing="0" cellPadding="0"
//                                                             bgcolor="#efefef" data-darkreader-inline-bgcolor
//                                                             data-darkreader-inline-border-left
//                                                             data-darkreader-inline-border-right
//                                                             data-darkreader-inline-border-top
//                                                             data-darkreader-inline-border-bottom role="presentation">
//                                                             <tr>
//                                                                 <td className="es-p20t es-p10b es-p20r es-p20l"
//                                                                     align="left">
//                                                                     <h4 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color>SHIPPING
//                                                                         ADDRESS:</h4>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="es-p20b es-p20r es-p20l" align="left">
//                                                                     <p>Andry Petrin</p>
//                                                                     <p>78 Somewhere St</p>
//                                                                     <p>Somewhere, Canada 99743</p>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             </tr>
//                                             </table>
//                                             <![endif]-->
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-content" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding="0"
//                                        cellSpacing="0" width="600" data-darkreader-inline-bgcolor
//                                        style="--darkreader-inline-bgcolor:#181a1b">
//                                     <tr>
//                                         <td className="es-p10t es-p10b es-p20r es-p20l" align="left"
//                                             style="background-position: center top">
//                                             <!--[if mso]>
//                                             <table width="560" cellpadding="0" cellspacing="0">
//                                                 <tr>
//                                                     <td width="154" valign="top">
//                                             <![endif]-->
//                                             <table cellPadding="0" cellSpacing="0" className="es-left" align="left">
//                                                 <tr>
//                                                     <td width="154" className="es-m-p20b" align="left">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                style="background-position: left top"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="center" style="font-size:0">
//                                                                     <a target="_blank"
//                                                                        href="https://viewstripo.email/Email.tsx">
//                                                                         <amp-img className="adapt-img"
//                                                                                  src="https://udpktq.stripocdn.email/content/guids/CABINET_dd455c10d72807d01fd51bb3bfe702d1/images/17351558530118413.jpg"
//                                                                                  alt style="display: block" width="154"
//                                                                                  height="202"
//                                                                                  layout="responsive"></amp-img>
//                                                                     </a>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             <td width="20"></td>
//                                             <td width="386" valign="top">
//                                             <![endif]-->
//                                             <table cellPadding="0" cellSpacing="0" className="es-right" align="right">
//                                                 <tr>
//                                                     <td width="386" align="left">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t es-m-txt-l">
//                                                                     <h3 style="color: #659c35;font-size: 19px;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color><strong>Sports
//                                                                         Menu</strong></h3>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="left" className="es-p5t">
//                                                                     <p>For those with active life style</p>
//                                                                     <p>and intensive gym trainings</p>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t es-m-txt-l">
//                                                                     <h3 style="color: #659c35;font-size: 19px;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color><strong><span
//                                                                         style="color: #000000;--darkreader-inline-color:#e8e6e3"
//                                                                         data-darkreader-inline-color>Qty:</span>&nbsp;1</strong>
//                                                                     </h3>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t es-m-txt-l">
//                                                                     <h3 style="color: #659c35;font-size: 19px;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color><strong><span
//                                                                         style="color: #000000;--darkreader-inline-color:#e8e6e3"
//                                                                         data-darkreader-inline-color>Price:</span>&nbsp;$12.00</strong>
//                                                                     </h3>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             </tr>
//                                             </table>
//                                             <![endif]-->
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="es-p10t es-p10b es-p20r es-p20l" align="left"
//                                             style="background-position: center top">
//                                             <!--[if mso]>
//                                             <table width="560" cellpadding="0" cellspacing="0">
//                                                 <tr>
//                                                     <td width="154" valign="top">
//                                             <![endif]-->
//                                             <table cellPadding="0" cellSpacing="0" className="es-left" align="left">
//                                                 <tr>
//                                                     <td width="154" className="es-m-p20b" align="left">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                style="background-position: left top"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="center" style="font-size:0">
//                                                                     <a target="_blank"
//                                                                        href="https://viewstripo.email/Email.tsx">
//                                                                         <amp-img className="adapt-img"
//                                                                                  src="https://udpktq.stripocdn.email/content/guids/CABINET_dd455c10d72807d01fd51bb3bfe702d1/images/56911558530799759.jpg"
//                                                                                  alt style="display: block" width="154"
//                                                                                  height="202"
//                                                                                  layout="responsive"></amp-img>
//                                                                     </a>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             <td width="20"></td>
//                                             <td width="386" valign="top">
//                                             <![endif]-->
//                                             <table cellPadding="0" cellSpacing="0" className="es-right" align="right">
//                                                 <tr>
//                                                     <td width="386" align="left">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t es-m-txt-l">
//                                                                     <h3 style="color: #659c35;font-size: 19px;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color><strong>Smart
//                                                                         Lunch</strong></h3>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="left" className="es-p5t">
//                                                                     <p>Healthy food in your office</p>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t es-m-txt-l">
//                                                                     <h3 style="color: #659c35;font-size: 19px;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color><strong><span
//                                                                         style="color: #000000;--darkreader-inline-color:#e8e6e3"
//                                                                         data-darkreader-inline-color>Qty:</span>&nbsp;1</strong>
//                                                                     </h3>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t es-m-txt-l">
//                                                                     <h3 style="color: #659c35;font-size: 19px;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color><strong><span
//                                                                         style="color: #000000;--darkreader-inline-color:#e8e6e3"
//                                                                         data-darkreader-inline-color>Price:</span>&nbsp;$10.00</strong>
//                                                                     </h3>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             </tr>
//                                             </table>
//                                             <![endif]-->
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-content" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding="0"
//                                        cellSpacing="0" width="600" data-darkreader-inline-bgcolor
//                                        style="--darkreader-inline-bgcolor:#181a1b">
//                                     <tr>
//                                         <td className="es-p15t es-p20r es-p20l" align="left"
//                                             style="background-position: center top">
//                                             <table cellPadding="0" cellSpacing="0" width="100%">
//                                                 <tr>
//                                                     <td width="560" align="center" valign="top">
//                                                         <table cellPadding="0" cellSpacing="0" width="100%"
//                                                                style="border-top: 1px solid #cccccc;border-bottom: 1px solid #cccccc;background-position: center top;--darkreader-inline-border-top:#3e4446;--darkreader-inline-border-bottom:#3e4446"
//                                                                data-darkreader-inline-border-top
//                                                                data-darkreader-inline-border-bottom role="presentation">
//                                                             <tr>
//                                                                 <td align="left" className="es-p10t">
//                                                                     <table border="0" cellSpacing="1" cellPadding="1"
//                                                                            style="width:500px"
//                                                                            className="cke_show_border"
//                                                                            role="presentation">
//                                                                         <tr>
//                                                                             <td>
//                                                                                 <h4 style="color: #333333;line-height: 200%;--darkreader-inline-color:#c8c3bc"
//                                                                                     data-darkreader-inline-color>Subtot<strong>al
//                                                                                     (3 items):</strong></h4>
//                                                                             </td>
//                                                                             <td style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                                 data-darkreader-inline-color>
//                                                                                 <strong>$22.00</strong></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>
//                                                                                 <h4 style="color: #333333;line-height: 200%;--darkreader-inline-color:#c8c3bc"
//                                                                                     data-darkreader-inline-color>Flat-rate
//                                                                                     Shipping:</h4>
//                                                                             </td>
//                                                                             <td style="color: #ff0000;--darkreader-inline-color:#ff1a1a"
//                                                                                 data-darkreader-inline-color>
//                                                                                 <strong>Free</strong></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>
//                                                                                 <h4 style="color: #333333;line-height: 200%;--darkreader-inline-color:#c8c3bc"
//                                                                                     data-darkreader-inline-color>Discount:</h4>
//                                                                             </td>
//                                                                             <td style="color: #ff0000;--darkreader-inline-color:#ff1a1a"
//                                                                                 data-darkreader-inline-color>
//                                                                                 <strong>$0.00</strong></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>
//                                                                                 <h4 style="color: #333333;line-height: 200%;--darkreader-inline-color:#c8c3bc"
//                                                                                     data-darkreader-inline-color>Order
//                                                                                     Total:</h4>
//                                                                             </td>
//                                                                             <td style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                                 data-darkreader-inline-color>
//                                                                                 <strong>$22.00</strong></td>
//                                                                         </tr>
//                                                                     </table>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="es-p30t es-p30b es-p20r es-p20l" align="left"
//                                             style="background-position: left top">
//                                             <!--[if mso]>
//                                             <table width="560" cellpadding="0" cellspacing="0">
//                                                 <tr>
//                                                     <td width="270" valign="top">
//                                             <![endif]-->
//                                             <table className="es-left" cellSpacing="0" cellPadding="0" align="left">
//                                                 <tr>
//                                                     <td className="es-m-p20b" width="270" align="left">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                style="background-position: center center"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="left">
//                                                                     <h4 style="color: #659c35;--darkreader-inline-color:#99cd6c"
//                                                                         data-darkreader-inline-color>Contact Us:</h4>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="es-p10t es-p15b" align="left">
//                                                                     <p>We prepare healthy, ready-to-eat,weekly meal
//                                                                         plans and delivers them to your door.</p>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>
//                                                                     <table className="es-table-not-adapt"
//                                                                            cellSpacing="0" cellPadding="0"
//                                                                            role="presentation">
//                                                                         <tr>
//                                                                             <td className="es-p5t es-p5b es-p10r"
//                                                                                 valign="top" align="left"
//                                                                                 style="font-size:0">
//                                                                                 <amp-img
//                                                                                     src="https://udpktq.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/30981556869899567.png"
//                                                                                     alt width="16"
//                                                                                     style="display: block"
//                                                                                     height="13"></amp-img>
//                                                                             </td>
//                                                                             <td align="left">
//                                                                                 <table width="100%" cellSpacing="0"
//                                                                                        cellPadding="0"
//                                                                                        role="presentation">
//                                                                                     <tr>
//                                                                                         <td align="left">
//                                                                                             <p><a target="_blank"
//                                                                                                   href="mailto:help@mail.com"
//                                                                                                   style="color: #333333;text-decoration: none;--darkreader-inline-color:#c8c3bc"
//                                                                                                   data-darkreader-inline-color>help@mail.com</a>
//                                                                                             </p>
//                                                                                         </td>
//                                                                                     </tr>
//                                                                                 </table>
//                                                                             </td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td className="es-p5t es-p5b es-p10r"
//                                                                                 valign="top" align="left"
//                                                                                 style="font-size:0">
//                                                                                 <amp-img
//                                                                                     src="https://udpktq.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/58031556869792224.png"
//                                                                                     alt width="16"
//                                                                                     style="display: block"
//                                                                                     height="16"></amp-img>
//                                                                             </td>
//                                                                             <td align="left">
//                                                                                 <table width="100%" cellSpacing="0"
//                                                                                        cellPadding="0"
//                                                                                        role="presentation">
//                                                                                     <tr>
//                                                                                         <td align="left">
//                                                                                             <p><a target="_blank"
//                                                                                                   href="tel:+14155555553"
//                                                                                                   style="color: #333333;text-decoration: none;--darkreader-inline-color:#c8c3bc"
//                                                                                                   data-darkreader-inline-color>+14155555553</a>
//                                                                                             </p>
//                                                                                         </td>
//                                                                                     </tr>
//                                                                                 </table>
//                                                                             </td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td className="es-p5t es-p5b es-p10r"
//                                                                                 valign="top" align="left"
//                                                                                 style="font-size:0">
//                                                                                 <amp-img
//                                                                                     src="https://udpktq.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/78111556870146007.png"
//                                                                                     alt width="16"
//                                                                                     style="display: block"
//                                                                                     height="16"></amp-img>
//                                                                             </td>
//                                                                             <td align="left">
//                                                                                 <table width="100%" cellSpacing="0"
//                                                                                        cellPadding="0"
//                                                                                        role="presentation">
//                                                                                     <tr>
//                                                                                         <td align="left">
//                                                                                             <p>San Francisco</p>
//                                                                                         </td>
//                                                                                     </tr>
//                                                                                 </table>
//                                                                             </td>
//                                                                         </tr>
//                                                                     </table>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="es-p15t" align="left"><span
//                                                                     className="es-button-border"><a
//                                                                     href="https://viewstripo.email/Email.tsx"
//                                                                     className="es-button" target="_blank">GET IT NOW</a></span>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             <td width="20"></td>
//                                             <td width="270" valign="top">
//                                             <![endif]-->
//                                             <table className="es-right" cellSpacing="0" cellPadding="0" align="right">
//                                                 <tr>
//                                                     <td width="270" align="left">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td align="center" style="font-size:0">
//                                                                     <amp-img className="adapt-img"
//                                                                              src="https://udpktq.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/52821556874243897.jpg"
//                                                                              alt style="display: block" width="270"
//                                                                              height="250" layout="responsive"></amp-img>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                             <!--[if mso]>
//                                             </td>
//                                             </tr>
//                                             </table>
//                                             <![endif]-->
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-footer" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table className="es-footer-body"
//                                        style="background-color: #333333;--darkreader-inline-bgcolor:#262a2b" width="600"
//                                        cellSpacing="0" cellPadding="0" bgcolor="#333333" align="center"
//                                        data-darkreader-inline-bgcolor>
//                                     <tr>
//                                         <td className="es-p20t es-p20r es-p20l"
//                                             style="background-position: center center;background-color: #659c35;--darkreader-inline-bgcolor:#517d2a"
//                                             bgcolor="#659C35" align="left" data-darkreader-inline-bgcolor>
//                                             <table width="100%" cellSpacing="0" cellPadding="0">
//                                                 <tr>
//                                                     <td width="560" valign="top" align="center">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td>
//                                                                     <table className="es-menu" width="100%"
//                                                                            cellSpacing="0" cellPadding="0"
//                                                                            role="presentation">
//                                                                         <tr className="links">
//                                                                             <td className="es-p10t es-p10b es-p5r es-p5l"
//                                                                                 style="padding-bottom: 0px;padding-top: 0px;--darkreader-inline-bgcolor:transparent"
//                                                                                 width="33.33%" valign="top"
//                                                                                 bgcolor="transparent" align="center"
//                                                                                 data-darkreader-inline-bgcolor><a
//                                                                                 target="_blank"
//                                                                                 style="color: #ffffff;--darkreader-inline-color:#e8e6e3"
//                                                                                 href="https://viewstripo.email"
//                                                                                 data-darkreader-inline-color>Menus</a>
//                                                                             </td>
//                                                                             <td className="es-p10t es-p10b es-p5r es-p5l"
//                                                                                 style="border-left: 1px solid #ffffff;padding-bottom: 0px;padding-top: 0px;--darkreader-inline-bgcolor:transparent;--darkreader-inline-border-left:#303436"
//                                                                                 width="33.33%" valign="top"
//                                                                                 bgcolor="transparent" align="center"
//                                                                                 data-darkreader-inline-bgcolor
//                                                                                 data-darkreader-inline-border-left><a
//                                                                                 target="_blank"
//                                                                                 style="color: #ffffff;--darkreader-inline-color:#e8e6e3"
//                                                                                 href="https://viewstripo.email"
//                                                                                 data-darkreader-inline-color>Delivery</a>
//                                                                             </td>
//                                                                             <td className="es-p10t es-p10b es-p5r es-p5l"
//                                                                                 style="border-left: 1px solid #ffffff;padding-bottom: 0px;padding-top: 0px;--darkreader-inline-bgcolor:transparent;--darkreader-inline-border-left:#303436"
//                                                                                 width="33.33%" valign="top"
//                                                                                 bgcolor="transparent" align="center"
//                                                                                 data-darkreader-inline-bgcolor
//                                                                                 data-darkreader-inline-border-left><a
//                                                                                 target="_blank"
//                                                                                 style="color: #ffffff;--darkreader-inline-color:#e8e6e3"
//                                                                                 href="https://viewstripo.email"
//                                                                                 data-darkreader-inline-color>Forum</a>
//                                                                             </td>
//                                                                         </tr>
//                                                                     </table>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="es-p20t es-p15b es-p20r es-p20l"
//                                             style="background-position: center center;background-color: #659c35;--darkreader-inline-bgcolor:#517d2a"
//                                             bgcolor="#659C35" align="left" data-darkreader-inline-bgcolor>
//                                             <table width="100%" cellSpacing="0" cellPadding="0">
//                                                 <tr>
//                                                     <td width="560" valign="top" align="center">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td className="es-p15b" align="center"
//                                                                     style="font-size:0">
//                                                                     <table className="es-table-not-adapt es-social"
//                                                                            cellSpacing="0" cellPadding="0"
//                                                                            role="presentation">
//                                                                         <tr>
//                                                                             <td className="es-p15r" valign="top"
//                                                                                 align="center">
//                                                                                 <amp-img title="Facebook"
//                                                                                          src="https://udpktq.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
//                                                                                          alt="Fb" width="32"
//                                                                                          height="32"></amp-img>
//                                                                             </td>
//                                                                             <td className="es-p15r" valign="top"
//                                                                                 align="center">
//                                                                                 <amp-img title="Twitter"
//                                                                                          src="https://udpktq.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png"
//                                                                                          alt="Tw" width="32"
//                                                                                          height="32"></amp-img>
//                                                                             </td>
//                                                                             <td valign="top" align="center">
//                                                                                 <amp-img title="Youtube"
//                                                                                          src="https://udpktq.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
//                                                                                          alt="Yt" width="32"
//                                                                                          height="32"></amp-img>
//                                                                             </td>
//                                                                         </tr>
//                                                                     </table>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="center">
//                                                                     <p style="font-size: 13px;color: #ffffff;--darkreader-inline-color:#e8e6e3"
//                                                                        data-darkreader-inline-color>You are receiving
//                                                                         this email because you have visited our site or
//                                                                         asked us about a regular newsletter. Make sure
//                                                                         our messages get to your inbox (and not your
//                                                                         bulk or junk folders).</p>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="es-p15t es-p10b" align="center"
//                                                                     style="font-size:0">
//                                                                     <amp-img
//                                                                         src="https://udpktq.stripocdn.email/content/guids/CABINET_c6d6983b8f90c1ab10065255fbabfbaf/images/15841556884046468.png"
//                                                                         alt style="display: block" width="140"
//                                                                         height="17"></amp-img>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td align="center" className="es-p5t">
//                                                                     <p style="font-size: 13px;color: #ffffff;--darkreader-inline-color:#e8e6e3"
//                                                                        data-darkreader-inline-color><a target="_blank"
//                                                                                                        style="font-size: 13px"
//                                                                                                        href="https://viewstripo.email/Email.tsx">Privacy</a> | <a
//                                                                         target="_blank" style="font-size: 13px"
//                                                                         className="unsubscribe">Unsubscribe</a></p>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                     <table cellPadding="0" cellSpacing="0" className="es-content" align="center">
//                         <tr>
//                             <td align="center">
//                                 <table bgcolor="transparent" className="es-content-body" align="center" cellPadding="0"
//                                        cellSpacing="0" width="600"
//                                        style="background-color: transparent;--darkreader-inline-bgcolor:transparent"
//                                        data-darkreader-inline-bgcolor>
//                                     <tr>
//                                         <td className="es-p30t es-p30b es-p20r es-p20l" align="left"
//                                             style="background-position: left top">
//                                             <table width="100%" cellSpacing="0" cellPadding="0">
//                                                 <tr>
//                                                     <td width="560" valign="top" align="center">
//                                                         <table width="100%" cellSpacing="0" cellPadding="0"
//                                                                role="presentation">
//                                                             <tr>
//                                                                 <td className="es-infoblock made_with" align="center"
//                                                                     style="font-size:0">
//                                                                     <a target="_blank"
//                                                                        href="https://viewstripo.email/Email.tsx?utm_source=templates&utm_medium=email&utm_campaign=food2&utm_content=order_newsletter">
//                                                                         <amp-img
//                                                                             src="https://udpktq.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png"
//                                                                             alt width="125" style="display: block"
//                                                                             height="56"></amp-img>
//                                                                     </a>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//                 </td>
//             </tr>
//         </table>
//     </div>
//     };
//
//     export default Email;
//
//     <meta charset="utf-8">
//     <style amp4email-boilerplate>body{visibility:hidden}</style>
//     <script async src="https://cdn.ampproject.org/v0.js"></script>
//     <style amp-custom>.jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
//         filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
//     }[data-darkreader-inline-bgcolor] {
//          background-color: var(--darkreader-inline-bgcolor) !important;
//      }
//     [data-darkreader-inline-bgimage] {
//         background-image: var(--darkreader-inline-bgimage) !important;
//     }
//     [data-darkreader-inline-border] {
//         border-color: var(--darkreader-inline-border) !important;
//     }
//     [data-darkreader-inline-border-bottom] {
//         border-bottom-color: var(--darkreader-inline-border-bottom) !important;
//     }
//     [data-darkreader-inline-border-left] {
//         border-left-color: var(--darkreader-inline-border-left) !important;
//     }
//     [data-darkreader-inline-border-right] {
//         border-right-color: var(--darkreader-inline-border-right) !important;
//     }
//     [data-darkreader-inline-border-top] {
//         border-top-color: var(--darkreader-inline-border-top) !important;
//     }
//     [data-darkreader-inline-boxshadow] {
//         box-shadow: var(--darkreader-inline-boxshadow) !important;
//     }
//     [data-darkreader-inline-color] {
//         color: var(--darkreader-inline-color) !important;
//     }
//     [data-darkreader-inline-fill] {
//         fill: var(--darkreader-inline-fill) !important;
//     }
//     [data-darkreader-inline-stroke] {
//         stroke: var(--darkreader-inline-stroke) !important;
//     }
//     [data-darkreader-inline-outline] {
//         outline-color: var(--darkreader-inline-outline) !important;
//     }
//     [data-darkreader-inline-stopcolor] {
//         stop-color: var(--darkreader-inline-stopcolor) !important;
//     }:root {
//          --darkreader-neutral-background: #131516;
//          --darkreader-neutral-text: #d8d4cf;
//          --darkreader-selection-background: #004daa;
//          --darkreader-selection-text: #e8e6e3;
//      }html {
//           color-scheme: dark !important;
//       }
//     input, textarea, select, button {
//         background-color: #181a1b;
//     }
//     html, body, input, textarea, select, button {
//         border-color: #736b5e;
//         color: #e8e6e3;
//     }
//     a {
//         color: #3391ff;
//     }
//     table {
//         border-color: #545b5e;
//     }
//     ::placeholder {
//         color: #b2aba1;
//     }
//     input:-webkit-autofill,
//     textarea:-webkit-autofill,
//     select:-webkit-autofill {
//         background-color: #555b00 !important;
//         color: #e8e6e3 !important;
//     }
//     ::-webkit-scrollbar {
//         background-color: #202324;
//         color: #aba499;
//     }
//     ::-webkit-scrollbar-thumb {
//         background-color: #454a4d;
//     }
//     ::-webkit-scrollbar-thumb:hover {
//         background-color: #575e62;
//     }
//     ::-webkit-scrollbar-thumb:active {
//         background-color: #484e51;
//     }
//     ::-webkit-scrollbar-corner {
//         background-color: #181a1b;
//     }
//     ::selection {
//         background-color: #004daa !important;
//         color: #e8e6e3 !important;
//     }
//     ::-moz-selection {
//         background-color: #004daa !important;
//         color: #e8e6e3 !important;
//     }.jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
//          filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
//      }[data-darkreader-inline-bgcolor] {
//           background-color: var(--darkreader-inline-bgcolor) !important;
//       }
//     [data-darkreader-inline-bgimage] {
//         background-image: var(--darkreader-inline-bgimage) !important;
//     }
//     [data-darkreader-inline-border] {
//         border-color: var(--darkreader-inline-border) !important;
//     }
//     [data-darkreader-inline-border-bottom] {
//         border-bottom-color: var(--darkreader-inline-border-bottom) !important;
//     }
//     [data-darkreader-inline-border-left] {
//         border-left-color: var(--darkreader-inline-border-left) !important;
//     }
//     [data-darkreader-inline-border-right] {
//         border-right-color: var(--darkreader-inline-border-right) !important;
//     }
//     [data-darkreader-inline-border-top] {
//         border-top-color: var(--darkreader-inline-border-top) !important;
//     }
//     [data-darkreader-inline-boxshadow] {
//         box-shadow: var(--darkreader-inline-boxshadow) !important;
//     }
//     [data-darkreader-inline-color] {
//         color: var(--darkreader-inline-color) !important;
//     }
//     [data-darkreader-inline-fill] {
//         fill: var(--darkreader-inline-fill) !important;
//     }
//     [data-darkreader-inline-stroke] {
//         stroke: var(--darkreader-inline-stroke) !important;
//     }
//     [data-darkreader-inline-outline] {
//         outline-color: var(--darkreader-inline-outline) !important;
//     }
//     [data-darkreader-inline-stopcolor] {
//         stop-color: var(--darkreader-inline-stopcolor) !important;
//     }:root {
//          --darkreader-neutral-background: #131516;
//          --darkreader-neutral-text: #d8d4cf;
//          --darkreader-selection-background: #004daa;
//          --darkreader-selection-text: #e8e6e3;
//      }html {
//           color-scheme: dark !important;
//       }
//     input, textarea, select, button {
//         background-color: #181a1b;
//     }
//     html, body, input, textarea, select, button {
//         border-color: #736b5e;
//         color: #e8e6e3;
//     }
//     a {
//         color: #3391ff;
//     }
//     table {
//         border-color: #545b5e;
//     }
//     ::placeholder {
//         color: #b2aba1;
//     }
//     input:-webkit-autofill,
//     textarea:-webkit-autofill,
//     select:-webkit-autofill {
//         background-color: #555b00 !important;
//         color: #e8e6e3 !important;
//     }
//     ::-webkit-scrollbar {
//         background-color: #202324;
//         color: #aba499;
//     }
//     ::-webkit-scrollbar-thumb {
//         background-color: #454a4d;
//     }
//     ::-webkit-scrollbar-thumb:hover {
//         background-color: #575e62;
//     }
//     ::-webkit-scrollbar-thumb:active {
//         background-color: #484e51;
//     }
//     ::-webkit-scrollbar-corner {
//         background-color: #181a1b;
//     }
//     ::selection {
//         background-color: #004daa !important;
//         color: #e8e6e3 !important;
//     }
//     ::-moz-selection {
//         background-color: #004daa !important;
//         color: #e8e6e3 !important;
//     }.es-desk-hidden {	display:none;	float:left;	overflow:hidden;	width:0;	max-height:0;	line-height:0;}.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {	background:#7DBF44;	border-color:#7DBF44;}.es-button-border:hover {	background:#7DBF44;	border-color:#7DBF44 #7DBF44 #7DBF44 #7DBF44;}td .es-button-border:hover a.es-button-1 {	background:#7DBF44;	border-color:#7DBF44;}td .es-button-border-2:hover {	background:#7DBF44;}s {	text-decoration:line-through;}body {	width:100%;	font-family:arial, "helvetica neue", helvetica, sans-serif;}table {	border-collapse:collapse;	border-spacing:0px;}table td, html, body, .es-wrapper {	padding:0;	Margin:0;}.es-content, .es-header, .es-footer {	table-layout:fixed;	width:100%;}p, hr {	Margin:0;}h1, h2, h3, h4, h5 {	Margin:0;	line-height:120%;	font-family:arial, "helvetica neue", helvetica, sans-serif;}.es-left {	float:left;}.es-right {	float:right;}.es-p5 {	padding:5px;}.es-p5t {	padding-top:5px;}.es-p5b {	padding-bottom:5px;}.es-p5l {	padding-left:5px;}.es-p5r {	padding-right:5px;}.es-p10 {	padding:10px;}.es-p10t {	padding-top:10px;}.es-p10b {	padding-bottom:10px;}.es-p10l {	padding-left:10px;}.es-p10r {	padding-right:10px;}.es-p15 {	padding:15px;}.es-p15t {	padding-top:15px;}.es-p15b {	padding-bottom:15px;}.es-p15l {	padding-left:15px;}.es-p15r {	padding-right:15px;}.es-p20 {	padding:20px;}.es-p20t {	padding-top:20px;}.es-p20b {	padding-bottom:20px;}.es-p20l {	padding-left:20px;}.es-p20r {	padding-right:20px;}.es-p25 {	padding:25px;}.es-p25t {	padding-top:25px;}.es-p25b {	padding-bottom:25px;}.es-p25l {	padding-left:25px;}.es-p25r {	padding-right:25px;}.es-p30 {	padding:30px;}.es-p30t {	padding-top:30px;}.es-p30b {	padding-bottom:30px;}.es-p30l {	padding-left:30px;}.es-p30r {	padding-right:30px;}.es-p35 {	padding:35px;}.es-p35t {	padding-top:35px;}.es-p35b {	padding-bottom:35px;}.es-p35l {	padding-left:35px;}.es-p35r {	padding-right:35px;}.es-p40 {	padding:40px;}.es-p40t {	padding-top:40px;}.es-p40b {	padding-bottom:40px;}.es-p40l {	padding-left:40px;}.es-p40r {	padding-right:40px;}.es-menu td {	border:0;}a {	text-decoration:none;}p, ul li, ol li {	font-family:arial, "helvetica neue", helvetica, sans-serif;	line-height:150%;}ul li, ol li {	Margin-bottom:15px;	margin-left:0;}.es-menu td a {	text-decoration:none;	display:block;	font-family:arial, "helvetica neue", helvetica, sans-serif;}.es-menu amp-img, .es-button amp-img {	vertical-align:middle;}.es-wrapper {	width:100%;	height:100%;}.es-wrapper-color {	background-color:#F6F6F6;}.es-header {	background-color:transparent;}.es-header-body {	background-color:#FFFFFF;}.es-header-body p, .es-header-body ul li, .es-header-body ol li {	color:#659C35;	font-size:16px;}.es-header-body a {	color:#659C35;	font-size:16px;}.es-content-body {	background-color:#FFFFFF;}.es-content-body p, .es-content-body ul li, .es-content-body ol li {	color:#333333;	font-size:14px;}.es-content-body a {	color:#659C35;	font-size:14px;}.es-footer {	background-color:transparent;}.es-footer-body {	background-color:transparent;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li {	color:#FFFFFF;	font-size:14px;}.es-footer-body a {	color:#FFFFFF;	font-size:14px;}.es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li {	line-height:120%;	font-size:12px;	color:#CCCCCC;}.es-infoblock a {	font-size:12px;	color:#CCCCCC;}h1 {	font-size:30px;	font-style:normal;	font-weight:normal;	color:#659C35;}h2 {	font-size:26px;	font-style:normal;	font-weight:bold;	color:#659C35;}h3 {	font-size:22px;	font-style:normal;	font-weight:normal;	color:#659C35;}.es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {	font-size:30px;}.es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {	font-size:26px;}.es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {	font-size:22px;}a.es-button, button.es-button {	border-style:solid;	border-color:#659C35;	border-width:10px 20px 10px 20px;	display:inline-block;	background:#659C35;	border-radius:0px;	font-size:18px;	font-family:arial, "helvetica neue", helvetica, sans-serif;	font-weight:normal;	font-style:normal;	line-height:120%;	color:#FFFFFF;	text-decoration:none;	width:auto;	text-align:center;}.es-button-border {	border-style:solid solid solid solid;	border-color:#659C35 #659C35 #659C35 #659C35;	background:#659C35;	border-width:0px 0px 0px 0px;	display:inline-block;	border-radius:0px;	width:auto;}@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150% } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px; text-align:center } h2 { font-size:22px; text-align:center } h3 { font-size:20px; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:22px } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px } .es-menu td a { font-size:16px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:block } a.es-button, button.es-button { font-size:20px; display:block; border-left-width:0px; border-right-width:0px } .es-btn-fw { border-width:10px 0px; text-align:center } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0px } td.es-m-p0r { padding-right:0px } td.es-m-p0l { padding-left:0px } td.es-m-p0t { padding-top:0px } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } .es-menu td { width:1% } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } }


const Email = (props) => {


}

export default Email;

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Thingstolookfor() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2017/06/laptop-on-table-web-image.png.webp" className="w-full h-96" />
                    <h1 className="text-5xl  leading-tight">10 Things to Look For With Commodity Brokerage Software</h1>
                    <h2 className="text-red-600 py-2">June 30, 2017 / <a href={'/Blogg'} className="hover:text-gray-700">Blog</a></h2>
                    <p className="text-gray-500 text-lg py-3">There aren’t many software solutions in the marketplace specifically adapted for commodity trading or scrap brokerage. Of the few available, many are basically just add-ons, built on existing waste hauling or accounting software that can have serious limitations and constraints, making them difficult to work with or adapt to your operation. Before choosing software for your scrap trading or commodity brokerage business, here are a few critical things to look when evaluating some of these solutions.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold">1.Does it match expense accruals with revenue to calculate gross profit?</p>
                    <p className="text-gray-500 text-lg py-3">Any brokerage system must be able to calculate gross profit by matching revenue (invoices) with related purchase & expense accruals on a given shipment. This is fundamental to how profitability is defined in the brokerage business and the basis of commissions & contribution. If the software you’re looking at doesn’t do this, then you can stop right here.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold"> 2.Is it easy to work with?</p>
                    <p className="text-gray-500 text-lg py-3">Effective brokerage software should be intuitive to work with and let users visualize the details of a trade on an single form/page including:  buy/sell prices, commodities, trading expenses, logistics references, financials, and a snap shot of projected gross profit, all without having to clicking through multiple tabs, pages or drill-downs.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold">3. Can it stage loads/shipments in advance?</p>
                    <p className="text-gray-500 text-lg py-3">Being able to setup and track mill releases, container shipments for bookings, or other schedule loads in advance of anything actually being shipped or billed is a critical capability that is needed to manage order demand, scheduling and in process shipments before an accounting event.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold">4.Can commodity prices be easily updated at any time?</p>
                    <p className="text-gray-500 text-lg py-3">Purchase and sales prices, especially for recycled commodities, are often set after loads have been shipped or even delivered. You should be able to easily manage and update multiple orders or contracts and previously shipped loads without having to edit each one.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold "> 5.Does it provide workflow features to manage operations?</p>
                    <p className="text-gray-500 text-lg py-3">To help stay on top of critical business activity, you should be able to easily manage common workflows such as arranging freight, sending notifications, getting received weights, tracking claims and downgrades without spreadsheets.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold "> 6.Can updates or corrections easily be made?</p>
                    <p className="text-gray-500 text-lg py-3">Brokerage is a dynamic business where weights, prices, pickup locations, and carriers can be changed at any time. You should be able to easily make changes/corrections, even after billing, without clunky “reversals” or re-entry of data.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold "> 7.Does it generate documentation and allow attachments?</p>
                    <p className="text-gray-500 text-lg py-3">Unless you can quickly and easily generate shipping documents such as pickup confirms, freight instructions, BOLs, etc., you will have to continue doing this manually. If you can’t attach photos or documents directly to your brokered loads then you will need to keep these in separate folders, making them difficult to find and retrieve.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold "> 8. Can it track sales reps and calculate commissions?</p>
                    <p className="text-gray-500 text-lg py-3">Many brokers need to track the contribution (gross profit) of one or more sales reps on a load by load basis for commissions. If you have this requirement make sure it is supported since determining split profit with multiple reps, especially if their contribution is based on sourcing material, can be very complicated to do.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold ">9. Does it report on gross profit at multiple levels?</p>
                    <p className="text-gray-500 text-lg py-3">Gross profit reporting is critical in the brokerage business for both decision making and for negotiating with trading partners. Brokers often need these reports at many different levels including customer, supplier, grade, order, load, etc.</p>
                    <p className="text-gray-900 text-xl py-3 font-semibold "> 10. Can it manage credit exposure and risk?</p>
                    <p className="text-gray-500 text-lg py-3">For some brokers, losing money on one trade can kill the P&L on many others. Any system can track open A/R but to manage risk, brokers often want to look at the unshipped portion of orders and uninvoiced loads and also factor internal interest (the spread between paying suppliers and receiving cash) as a cost of doing business.</p>
                </div>
            </Container>
        </div>
    );
};

export default Thingstolookfor; 
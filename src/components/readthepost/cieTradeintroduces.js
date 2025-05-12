import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function CieTradeintroduces() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">cieTrade Introduces Freight Booking Integration with Freightview</h1>
                    <h2 className="text-red-600 py-2">October 18, 2023 / <a href={'/Pressreleases'} className="hover:text-gray-700">Press Releases</a></h2>
                    <center>
                        <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Freightview-Banner-1.png.webp" className="w-2/3" />
                        <h1 className="text-gray-500 text-lg py-3 italic">New integration partnership simplifies the freight tendering process and optimizes freight rates.</h1>
                    </center>
                    <p className="text-gray-500 text-lg py-3"><b className="text-zinc-500">Norwalk, Conn. — October 16, 2023</b> — cieTrade, a leading provider of business management software for commodity brokers, paper and recycling companies announces a new partnership with <a href="https://www.freightview.com/" className="text-red-600 hover:text-gray-700">Freightview</a>, a cloud-based TMS platform that helps shippers streamline freight management functions including freight rating, electronic bookings, load tracking, reporting and more across all modes of domestic transportation. Through cieTrade’s seamless integration with the Freightview TMS, clients can minimize transportation costs, improve customer service and boost productivity by eliminating double entry of confirmed freight rates and carriers.</p>
                    <p className="text-gray-500 text-lg py-3">“Freightview has long been a leader in transportation management services. We are pleased to offer our clients the ability to leverage their platform to streamline their shipping workflow and automate load tendering and freight rate confirmations, saving time and reducing costly errors. In the current environment, every advantage we can offer helps our clients stay competitive and derive more value from their IT investment and this partnership helps further that mission,” says David Haber, Managing Director at cieTrade.</p>
                    <p className="text-gray-500 text-lg py-3">Our new integration model with Freightview allows freight requests to be submitted directly from the cieTrade platform with just a mouse-click, eliminating the need to manually re-key load details such as equipment types, pickup and delivery locations plus more. Once received in Freightview, open freight requests can be managed, quoted and tendered to a carrier. Once rates are confirmed, they are automatically updated in cieTrade with no user intervention, instantly creating a freight expense record that can easily be reconciled and paid.</p>
                    <p className="text-gray-500 text-lg py-3">To learn more about cieTrade and our integration with Freightview, call (203) 323 0074.</p>
                    <b className="text-zinc-500 text-lg py-3">About cieTrade</b>
                    <p className="text-gray-500 text-lg py-3">cieTrade is used by many of the leading recycling and forest products companies worldwide. We offer a unique business management solution for both (SaaS) cloud and on-premise environments tailored to the needs of bulk commodity traders, recycling plants, pulp and paper companies. Our solution provides the specialized workflows, business processes, shipping documents and financial reports that clients need combined with a support team that offers deep industry knowledge and best practices to help achieve maximum value from the platform.</p>
                </div>
            </Container>
        </div>
    );
};

export default CieTradeintroduces;
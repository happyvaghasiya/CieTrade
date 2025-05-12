import { Row, Col, Container } from 'react-bootstrap';
import React from "react";

function Commercial() {
    const data = {
        info: [
            { time: ">12%", description: "Reduction in errors and typos after eliminating manual spreadsheets which helped avoid costly settlement and accounting mistakes." },
            { time: ">96 hrs.", description: "Saved on manual calculations to derive inventory value and cost of goods sold per year." },
            { time: ">4 days", description: "In reduced work days spent compiling specialized business and gross profit reports." },
            { time: ">10 hrs.", description: "Time saved performing month end reconciliations and generating financial reports and statements." },
        ]




    }
    return (
        <div>
            <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/PET1.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-32 pt-52 lg:px-60">
                    <h1 className="text-5xl text-white font-bold leading-tight">cieTrade Gives Commercial Plasticsr Recycling Greater Control and Oversight.</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Learn how Commercial Plastics Recycling improved operational efficiency and gained insight to inventory values and costs  with cieTrade’s specialized functions and reports.</h1>
                </div>
            </div>
            <Container>
                {data.info.map((item, index) => (
                    <div key={index} className='pt-5'>
                        <h1 className='text-4xl py-3 text-red-600 font-bold'>"{item.time}"</h1>
                        <h1 className='text-2xl font-semibold'>{item.description}</h1>
                    </div>
                ))}
            </Container>
            <Container>
                <Row className='py-5' >
                    <Col lg={6}>
                        <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/commercial-plastics-warehouse-590x443-1.png.webp"></img>
                    </Col>
                    <Col lg={6}>
                        <h6 className='text-2xl font-bold py-2'>Background</h6>
                        <h6 className='text-gray-500 text-lg py-2'>Founded in 1996, Commercial Plastics Recycling, Inc. (CPR, Inc.) is a growing, full-service recycler of post-industrial and post-consumer scrap plastic dedicated to “Giving New Life To Recycled Plastics” for 26 years and counting. Before cieTrade, Commercial Plastics Recycling, Inc developed its own custom Microsoft Access database to track inventory and manage operations. However, their team soon realized the system wasn’t as efficient as they’d hoped and it’d become difficult and time-consuming to maintain a home-grown program. “It was very antiquated and labor intensive,” says Dave Hovey, Chief Financial Officer. Over time, CPR, Inc. searched for alternatives and after learning that cieTrade was specifically designed to support the day-to-day operations of plastic recyclers, they reached out to make the switch.</h6>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h6 className='text-3xl font-bold py-2'>The Challenge</h6>
                <h6 className='text-gray-500 text-lg py-'>For Commercial Plastics Recycling, Inc. getting an accurate inventory valuation, deriving cost of goods sold (COGS) and reporting gross profit were difficult and time consuming processes that meant sifting through countless spreadsheets and spending hours to compile the necessary data. Their lack of visibility into inventory levels affected cycle counts, production scheduling and made it extremely difficult to assess their inventory exposure and carrying costs. Additionally, the reports available from their home-built program lacked critical detail and did not offer drill-down features, requiring users to manually gather backup details from other sources such as spreadsheet files or manual documents.</h6>
                <h6 className='text-gray-500 text-lg py-3'>At the end of each month, their closing process meant hours spent exporting data from their home-built program and manually performing time intensive analysis and calculations separating non-material vs. internal expenses to produce a meaningful inventory valuation. This process accounted for at least 8 hours every month and added a full day to their month-end closing procedure.  As they looked for alternatives, Commercial Plastics Recycling, Inc. initially explored an “accounting only” solution but quickly realized that while that approach might address some requirements, many others remained such as the ability to track inventory by individual items, account for material processing costs or produce gross profit based on an inventory value that included transportation, processing and other carrying costs— not just purchases.</h6>
            </Container>
            <Container className='bg-light my-5 p-4 py-4'>
                <h6 className='text-red-600 text-4xl'><i class="fa-solid fa-quote-left"></i></h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>We found that QuickBooks just wasn’t sophisticated enough to handle our business processes, inventory needs and provide real-time access to the financial insights and reports we needed.</h6></div>
                <div className=' py-2'><h6 className='text-lg font-bold'> Dave Hovey, Chief Financial Officer</h6></div>
            </Container>
            <Container className='pb-5'>
                <h6 className='text-3xl font-bold py-2'>The Solution</h6>
                <h6 className='text-gray-500 text-lg py-'>Faced with several challenges and inefficiencies, Commercial Plastics Recycling, Inc. needed a recycling industry specific solution that was designed to handle the workflow, inventory and reporting needs common to plastic recyclers. After switching to cieTrade, the team was able to view and record all of their data in a single place, eliminating double-entry and reducing errors by at least 12% while also improving access and visibility to business information. cieTrade’s landed-cost inventory model made it easy for CPR, Inc. to instantly capitalize inventory expenses into finished goods, ensuring that their inventory values always reflected the true cost of the material. Rather than manually calculating COGS at the end of each month, cieTrade allowed the team to view this information in real-time, saving them several hours of work while reducing oversights and errors. cieTrade’s specialized reports and inquiries also made it easier for Commercial Plastics Recycling, Inc. to identify financial trends and patterns, including certain types of sales that had greater margins than others. Additionally, each report’s multi level drill-down filters allowed the team to quickly access historical data and focus on specific date ranges, helping them analyze their quarterly profits, identify where their current financials stood compared to other periods throughout the year and much more..</h6>
            </Container>
            <Container>
                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/commercial-plastics-processing.png.webp" className='w-full'></img>
            </Container>
            <Container className='py-4'>
                <h6 className='text-3xl text-black font-bold'>Results</h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>With cieTrade, Commercial Plastics Recycling, Inc. was able to increase operational efficiency, improve cost tracking, obtain more accurate inventory valuations and gain critical business insight. Today, their team continues to leverage the platform to manage their daily operations and activity as well as measure business performance.</h6></div>
            </Container>
            <Container className='pb-5'>
                <li className='text-lg text-gray-500'>After switching to cieTrade, Commercial Plastics Recycling, Inc. gained real-time visibility of the inventory they had on hand at any given time.</li>
                <li className='text-lg text-gray-500'>With cieTrade, their team obtained instant access to accurate, up-to-date inventory valuations, reducing errors and saving them over 8 hours isolating expenses and manually calculating COGS each month.</li>
                <li className='text-lg text-gray-500'>cieTrade’s multi-level inquiry filters and specialized financial reports helped CPR, Inc. save an average of 5 hours per week searching and gathering data to put together more comprehensive reports than what their previous solution offered them. They are now able to quickly reference historical data, obtain better, more detailed insights and identify trends and changes in their business processes for improved decision-making.</li>
            </Container>
            <Container className='bg-light my-3 p-4 py-4'>
                <h6 className='text-red-600 text-4xl'><i class="fa-solid fa-quote-left"></i></h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>With cieTrade, what we used to spend a lot of time on, we now spend minimal time on and have a much higher confidence level that we have good, accurate data.</h6></div>
                <div className=' py-2'><h6 className='text-lg font-bold'> Dave Hovey, Chief Financial Officer</h6></div>
            </Container>
        </div>

    )
}
export default Commercial;
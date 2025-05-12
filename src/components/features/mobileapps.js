import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import Cielocation from '../../assets/img/cielocation.png';
import Ciephoto from '../../assets/img/mobile4.webp';
import Ciedispatchupdated from '../../assets/img/ciedispatchupdated.png';
import Ciemobilelargefeature from '../../assets/img/ciemobilelargefeature.png';
import Baleinventory from '../../assets/img/baleinventory.png';



function Mobileapps() {
    return (
        <div>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/2022-08-04_10h14_47.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">Mobile Apps</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Our mobile apps save time and keep you connected</h1>
                </div>
            </div>


            <Container className='bg-light'>
                <Row className='g-0 py-10'>
                    <Col lg={6}><img src={Cielocation}/></Col>
                    <Col lg={6} className='py-10'>
                        <h6 className='text-4xl font-bold py-3'>cieLocation</h6>
                        <div className='flex py-2'><h6 className='text-lg text-gray-500 '>cieLocation improves identification and accuracy of material movements across warehouse locations by providing warehouse personnel with an instant way of identifying and relocating inventory, checking and confirming the availability of items in your warehouse and minimizing time spent with physical stock and cycle counts.</h6></div>
                        <div className='pt-4'> <a href={'/Cielocation'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='g-0 py-10'>
                    <Col lg={6}><img src={Ciephoto} className='w-full'/></Col>
                    <Col lg={6} className='py-10'>
                        <h6 className='text-4xl font-bold py-3'>ciePhoto</h6>
                        <div className='flex py-2'><h6 className='text-lg text-gray-500 '>ciePhoto replaces your existing digital camera and allows users to take photos of outbound export containers or to document quality issues on received loads. The photos are automatically uploaded into the cieTrade database over any internet connection and attached directly to the appropriate load number, eliminating the time consuming task of manually managing hundreds of photos. ciePhoto can also reduce the number of lost photos since the images are uploaded from the device immediately after they are taken.</h6></div>
                        <div className='pt-4'> <a href={'/Ciephoto'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>
            <Container className='bg-light'>
                <Row className='g-0 py-10'>
                    <Col lg={6}><center><img src={Ciedispatchupdated} className='w-2/3'/></center></Col>
                    <Col lg={6} className='py-10'>
                        <h6 className='text-4xl font-bold py-3'>cieDispatch</h6>
                        <div className='flex py-2'><h6 className='text-lg text-gray-500 '>cieDispatch lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos. Information is instantly updated in your existing cieTrade account, saving time and making it easier to manage services while eliminating double-entry.</h6></div>
                        <div className='pt-4'> <a href={'/Ciedispatch'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='g-0 py-10'>
                    <Col lg={6}><center><img src={Ciemobilelargefeature} className='w-3/4'/></center></Col>
                    <Col lg={6} className='py-2'>
                        <h6 className='text-4xl font-bold py-3'>cieMobile</h6>
                        <div className='flex py-2'><h6 className='text-lg text-gray-500 '>ciePhoto replaces your existing digital camera and allows users to take photos of outbound export containers or to document quality issues on received loads. The photos are automatically uploaded into the cieTrade database over any internet connection and attached directly to the appropriate load number, eliminating the time consuming task of manually managing hundreds of photos. ciePhoto can also reduce the number of lost photos since the images are uploaded from the device immediately after they are taken.</h6></div>
                        <div className='pt-4'> <a href={'/Ciemobile'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>
            <Container className='bg-light'>
                <Row className='g-0 py-10'>
                    <Col lg={6}><center><img src={Baleinventory} className='w-2/3'/></center></Col>
                    <Col lg={6} className=''>
                        <h6 className='text-4xl font-bold py-3'>clickBale</h6>
                        <div className='flex py-2'><h6 className='text-lg text-gray-500 '>clickBale lets you easily manage your scrap bale production and inventory. Each bale that’s received or produced can be quickly captured or even tagged with a barcode label created from a mobile printer. Outbound Bales can be scanned or tallied with an average weight while it’s tracking total load weight. A live Inventory report shows you what grades of material you have on hand including total weight and bale count and a recent transaction history. Corrections can be made from your mobile phone or you can view and adjust bale inventory directly from within cieTrade.</h6></div>
                        <div className='pt-4'> <a href={'/Clickbale'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mobileapps;
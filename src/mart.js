import React,{useState} from 'react';
import Logo from './shoppingbag.gif';
import Logo1 from './8logo.gif';
import Logo3 from './garments.jpg';
import Logo2 from './shoppingcart.gif';
import './mart.css';

function Mart(){
    // const [color,setColor] =useState("skyblue");
    // const [btntext,setBtntext] = useState("click");
    // const changecolor=()=> {
    //     if(color === "skyblue" && btntext ==="click"){
    //         setColor('red');
    //         setBtntext('click here');
    //     }else{
    //         setColor('skyblue');
    //         setBtntext('click');
    //     }
    //     //alert ({setColor});
    // }
    return(
        <>
        <div id='d8'>
        <div className='d1'>
            {/* <div id ='d7'><img id="img1" src={Logo} alt="Loading error"></img></div> */}
            <div id='d6'>
                <div id='d4'>

            
                    <div className='d3'>
                        <p>since</p><img id="img1" src={Logo} alt="Loading error"></img><p>2022</p>
                    </div>
                    <div id='d5'>
                     <h1>SUPERMART</h1>
                    </div>
                </div>
            {/* <img  src={Logo} alt='error'/>         */}
            <input id='search' type="search" placeholder='Search here' ></input>
            <div id='d2'>
                <img id="img1" src={Logo1} alt="Loading error"></img>
                <a href="#"><i className="signin"></i> SignIn</a>
               
                {/* <a href="#"><i className="signin"></i> SignUp</a> */}
            </div>
            <div className='d3'>
            <img id="img2" src={Logo2} alt="Loading error"></img>
            </div>
            </div>
        </div>
        <div id='d9'>
        <div id='d7'>
            
            <div id='categery'>
                <div id='h1b'>
                <p id='h1'>Categories</p>
                </div>
                <p>Home Appliances</p>
                <p>Grocery</p>
                <p>Toys</p>
                <p>perfumes</p>
                <p>electronic gadgets</p>

            </div>
            <div>
            <img id='img3' src={Logo3} alt="Loading error"></img>
            </div>

            
        </div>
        </div>


        <div id='d9'>
        <div id='d7'>
            
        <div style={{    borderRadius: "15px",backgroundColor: "gray",       
            height: "300px",
            padding:" 20px",
            marginLeft:"20px",
            width: "auto"}}>
            <img style={{width:"200px", height:"200px"}} src={Logo3} alt="logo" />
            {/* <h1> Hello </h1> */}
            <div style={{textAlign:"center"}}>
                
                <button id="bt1"  
                   >
                    ADD to Cart
                </button>

            </div>
            
        </div>
            
        </div>
        </div>
        </div>        
 

        </>
    );


}

export default Mart;
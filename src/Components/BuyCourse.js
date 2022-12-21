import {useRef} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BuyCourse()
{
    const nameInput=useRef(null);
    const emailInput=useRef(null);
    const phone_no=useRef(null);
    const whatsapp_no=useRef(null);

    function submitHandler()
    {
        const username=nameInput.current.value;
        const useremail=emailInput.current.value;
        const phone_no_1=phone_no.current.value;
        const phone_no_2=whatsapp_no.current.value;

        let user={
            name:username,
            email:useremail,
            phone_number:phone_no_1,
            whatsapp_number:phone_no_2,
        }

        if(username.length > 3 && useremail.length > 3 && phone_no_1>1111111111 && phone_no_2>1111111111)
        {

        fetch('https://fewd-batch1-default-rtdb.firebaseio.com/user.json',{
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
            {
                toast.success('Registered Successfully',
                {
                    position:"top-center",
                    autoclose:2000,
                    hideProgressbar:true,
                    closeOnClick:true,
                });
                window.location.replace('https://forms.gle/i2HFLssiXtck7n738');
            }
        )
        }

        else if (username.length < 3)
        {
            toast.error('Please enter proper name',
                {
                    position:"top-center",
                    autoclose:5000,
                    hideProgressbar:false,
                    closeOnClick:true,
                });
        }

        else if (useremail.length < 3)
        {
            toast.error('Please enter proper email',
                {
                    position:"top-center",
                    autoclose:5000,
                    hideProgressbar:false,
                    closeOnClick:true,
                });
        }
        else if (phone_no_1.length < 1111111111)
        {
            toast.error('Please enter proper input',
                {
                    position:"top-center",
                    autoclose:5000,
                    hideProgressbar:false,
                    closeOnClick:true,
                });
        }
        else 
        {
            toast.error('Please enter proper input',
                {
                    position:"top-center",
                    autoclose:5000,
                    hideProgressbar:false,
                    closeOnClick:true,
                });
        }

    }

    return(
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center mt-5 mb-3 d-flex">
            <div className="col-md-5 mt-5 text-white px-3 py-3 buy-form mx-2">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" ref={nameInput}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={emailInput}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" maxLength={10} ref={phone_no}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Whatsapp Number</label>
                    <input type="tel" className="form-control" maxLength={10} ref={whatsapp_no}/>
                </div>
                <button type="button" className="payment-btn" onClick={submitHandler}>Proceed for Payment</button>
                <ToastContainer/>
            </form>
            </div>
        </div>
        </div>
    );
}

export default BuyCourse;
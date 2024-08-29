import { bookingModel } from '../booking/booking.model';
import { verifyPayment } from './payment.utils';
import { join } from 'path';
import { readFileSync } from 'fs';
/*

----------------service function for changing paymnet status of a booking in DB----------------*/
const sendConfirmationService = async (
  transactionID: string,
  status: string,
) => {
  //   const verifyResponse =

  await verifyPayment(transactionID);

  //   console.log(verifyResponse);

  //   let response;

  //   if (verifyResponse && verifyResponse.pay_status === 'Successful') {
  const response = await bookingModel
    .findOneAndUpdate(
      { transactionID },
      { paymentStatus: 'paid' },
      { new: true },
    )
    .populate('user')
    .populate('facility');
  //   }

  console.log(response);

  const filePath = join(__dirname, './payment.views/confirmation.html');
  let template = readFileSync(filePath, 'utf-8');

  template = template
    .replace('{{message}}', status)
    .replace('{{bookingDate}}', response?.date as string)
    .replace('{{startTime}}', response?.startTime as string)
    .replace('{{endTime}}', response?.endTime as string)
    .replace('{{bookingStatus}}', response?.isBooked.toUpperCase() as string)
    // .replace('{{customerName}}', response?.user.name as any)
    // .replace('{{customerEmail}}', response?.user.email as string)
    // .replace('{{customerPhone}}', response?.user.phone as string)
    // .replace('{{facilityName}}', response?.facility.name as string)
    // .replace(
    //   '{{pricePerHour}}',
    //   response?.facility.pricePerHour.toString() as string,
    // )
    // .replace('{{location}}', response?.facility.location as string)
    .replace('{{bill}}', response?.payableAmount.toString() as string)
    .replace('{{txnId}}', response?.transactionID as string)
    .replace(
      '{{paymentStatus}}',
      response?.paymentStatus.toUpperCase() as string,
    );

  return template;
};

//exporting all the service functions through facilityServices object
export const paymentServices = {
  sendConfirmationService,
};

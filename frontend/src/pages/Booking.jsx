import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Terms from "../components/Terms";
import { QRCodeSVG } from "qrcode.react";

function Booking() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  // Use the useState hook to create a piece of state to track the number of forms
  const [numForms, setNumForms] = React.useState(1);

  // This function will be called when the button is clicked
  const addForm = (e) => {
    // Increment the number of forms by 1
    e.preventDefault();
    setNumForms(numForms + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form data to the backend for processing
    // submitBooking(checkInDate, checkOutDate, guests);
  };

  // Use a loop or the map function to render the forms
  const forms = [];
  for (let i = 0; i < numForms; i++) {
    forms.push(
      <div key={i}>
        <input type="text" />
      </div>
    );
  }

  return (
    <>
      <Header />

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          padding: "2%",
        }}
      >
        <Terms />
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Booking Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Please complete all input fields
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contact
                        </label>
                        <input
                          type="number"
                          name="last-name"
                          id="last-name"
                          autoComplete={false}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm no-spin"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Adress
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="street-address"
                          id="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <div className="col-span-6">
                        <label>
                          Check-in Date:
                          <input
                            type="date"
                            value={checkInDate}
                            onChange={(event) =>
                              setCheckInDate(event.target.value)
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            style={{ width: "15%", margin: "20px 0" }}
                            min={new Date()}
                            pattern={"d{4}-d{2}-d{2}"}
                          />
                        </label>
                        <label>
                          Check-out Date:
                          <input
                            type="date"
                            value={checkOutDate}
                            onChange={(event) =>
                              setCheckOutDate(event.target.value)
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            style={{ width: "15%", margin: "20px 0" }}
                          />
                        </label>
                        <label>
                          Number of guests (inluding you):
                          <input
                            type="number"
                            min={1}
                            value={guests}
                            onChange={(event) => setGuests(event.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            style={{ width: "15%", margin: "20px 0" }}
                          />
                        </label>
                        <label>
                          Number of Minor:
                          <input type="number" min={0} />
                        </label>
                        <label>
                          Number of Adult:
                          <input type="number" min={0} />
                        </label>
                        {forms}
                        <button onClick={addForm}>Add Form</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Confirmation
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Upon confirmation you are agreeing to our terms and conditions
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div
                      className="text-base font-medium text-gray-900"
                      aria-hidden="true"
                    >
                      Confirm Booking
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Waiver
                          </label>
                          <p className="text-gray-500">
                            Agreeing in our Waiver and health Declaration
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-700"
                          >
                            Terms and conditions
                          </label>
                          <p className="text-gray-500">
                            Agreeing in our Terms and Conditions
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QRCodeSVG
          style={{ marginLeft: "50px", width: "182px", height: "182px" }}
          value={JSON.stringify({ id: new Date(), name: "test" })}
        />
      </div>
      <Footer />
    </>
  );
}

export default Booking;

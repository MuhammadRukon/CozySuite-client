import { useContext, useState } from "react";
import ReactStars from "react-stars";
import { AuthContext } from "../provider/AuthProvider";

const ReviewModal = ({ booked, room }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [review, setReview] = useState({});
  const [done, setDone] = useState(false);
  const { user } = useContext(AuthContext);

  const handleReview = () => {
    setErrorMessage("");
    if (rating === 0 && reviewText.length < 1) {
      setErrorMessage("give a rating and proper review");
      return;
    }
    setReview({
      rating,
      reviewText,
      user: user.displayName,
      userImg: user.photoURL,
    });
    setDone(true);
    console.log(review);
  };

  const handleReviewText = (e) => {
    setReviewText(e.target.value);
  };

  const ratingChanged = (e) => {
    setRating(e);
  };

  const handleSubmit = () => {
    //get id and update room/update/:id with rating use $push
    fetch(`http://localhost:5000/rooms/${room._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
    //then clear form
    setDone(false);
    setReviewText("");
    setRating(0);
  };

  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className={`btn w-fit ${
          !booked ? "btn-disabled" : ""
        } hover:border-primary hover:text-primary bg-primary text-white hover:bg-white font-bold`}
      >
        Add Review
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-10 max-w-3xl text-center">
          <h3 className="font-bold text-2xl my-5 mb-10">Add Review</h3>
          <ReactStars
            count={5}
            className="mb-5 flex gap-5"
            onChange={ratingChanged}
            size={40}
            half={true}
            value={rating}
            color2={"#ffd700"}
          />
          <textarea
            onChange={handleReviewText}
            value={reviewText}
            className="textarea w-full resize-none h-52 textarea-bordered focus:outline-none"
            placeholder="Bio"
          ></textarea>
          <p className="text-red-600 text-left font-normal italic pl-2">
            {errorMessage}
          </p>
          <div className="flex gap-5 justify-center mt-10">
            <button
              onClick={handleReview}
              className="btn w-20 hover:text-white bg-primary text-white hover:bg-primary font-bold"
            >
              save
            </button>
            <div className="modal-action mt-0 justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}

                <button
                  onClick={handleSubmit}
                  className={`btn  ${
                    !done ? "btn-disabled" : ""
                  } hover:text-white bg-primary text-white hover:bg-primary font-bold`}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ReviewModal;

import { Plus } from "react-bootstrap-icons";

const Card = () => {
  return (
    <div className="content">
      <div className="content__card">
        <div className="content__card__title">To do</div>
        <button className="content__card__btn">
          <Plus className="content__card__btn__icon" />
        </button>
      </div>
      <div className="content__card">
        <div className="content__card__title">In progress</div>
        <button className="content__card__btn">
          <Plus className="content__card__btn__icon" />
        </button>
      </div>
      <div className="content__card">
        <div className="content__card__title">Completed</div>
        <button className="content__card__btn">
          <Plus className="content__card__btn__icon" />
        </button>
      </div>
    </div>
  );
};

export { Card };

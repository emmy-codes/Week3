export const TaskItem = ({ text, id, onClick }) => (
    <div className="task-item-container">
      <p className="task-title">{text}</p>
      <button className="delete-task-button" onClick={() => onClick(id)}>
        X
      </button>
    </div>
  );
  
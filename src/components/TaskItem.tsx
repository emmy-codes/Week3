type TaskItemProps = {text: string, id: number, onClick: (id: number) => void};

export const TaskItem = ({ text, id, onClick }: TaskItemProps ) => (
    <div className="task-item-container">
      <p className="task-title">{text}</p>
      <button className="delete-task-button" onClick={() => onClick(id)}>
        X
      </button>
    </div>
  );
  
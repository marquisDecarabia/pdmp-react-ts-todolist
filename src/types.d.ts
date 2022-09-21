type Todo = {
    id: number | null;
    name: string | null;
    checked: boolean | null;
}

type AddTodo = VoidFunction;
type DeleteTodo = (todoId: number | null) => void;
type ToggleTodo = (todoId: number | null) => void;
type HandleSubmit = (e: FormElement) => void;
let tasks = [
    { id: 1, text: 'Learn Next.js', editing: false, taskStatus: 'new' },
    { id: 2, text: 'Build a Todo App', editing: false, taskStatus: 'new' },
];

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json(tasks);
            break;
        case 'POST':
            const newTask = { id: Date.now(), text: req.body.text, editing: false, taskStatus: 'new' };
            tasks.push(newTask);
            res.status(201).json(newTask);
            break;
        case 'PUT':
            const { id, text } = req.body;
            tasks = tasks.map(task => task.id === id ? { ...task, text, editing: false } : task);
            res.status(200).json({ id, text });
            break;
        case 'DELETE':
            const { taskId } = req.query;
            tasks = tasks.filter(task => task.id !== parseInt(taskId));
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

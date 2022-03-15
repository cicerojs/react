import { useCallback, useState } from 'react';

interface IlistItem{
    title: string,
    isSelected: boolean
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IlistItem[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement>  = useCallback((e) => {

        if(e.key === 'Enter'){

            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {

                if(oldLista.some((listItem) => listItem.title === value)) return oldLista;

                return [
                    ...oldLista, 
                    {
                        title: value,
                        isSelected: false
                    }
                ];
            })
        }
    }, []);
    
    return (
        <div>
            <p>Lista</p>
            <input
                onKeyDown={handleInputKeyDown}
            />

            <p>{lista.filter((listItem, index) => listItem.isSelected).length}</p>

            <ul>
                {lista.map((listItem, index) => {
                    return <li key={listItem.title}>
                            <input type="checkbox" 
                                    checked = {listItem.isSelected}
                                   onChange={() => {
                                       setLista(oldlista => {
                                           return oldlista.map(oldListItem => {
                                                const newIsSelected = oldListItem.title === listItem.title
                                                                      ? !oldListItem.isSelected
                                                                      : oldListItem.isSelected
                                                return {
                                                    ...oldListItem,
                                                    isSelected: newIsSelected
                                                }
                                           });
                                       })
                                   }}
                            />
                            {listItem.title}
                           </li>
                })}
            </ul>
        </div>
    )
}
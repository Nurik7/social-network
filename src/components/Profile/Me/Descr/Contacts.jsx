const Contacts = (props) => {
    return (
        <div>
            <div>{`Facebook : ${props.facebook!==null ? props.facebook : 'Данных еще нет :('}`}</div>
            <div>{`GitHub : ${props.github!==null ? props.github : 'Данных еще нет :('}`}</div>
            <div>{`Instagram : ${props.instagram!==null ? props.instagram : 'Данных еще нет :('}`}</div>
            <div>{`Main Link : ${props.mainLink!==null ? props.mainLink : 'Данных еще нет :('}`}</div>
            <div>{`Twitter : ${props.twitter!==null ? props.twitter : 'Данных еще нет :('}`}</div>
            <div>{`VK : ${props.vk!==null ? props.vk : 'Данных еще нет :('}`}</div>
            <div>{`Website : ${props.website!==null ? props.website : 'Данных еще нет :('}`}</div>
            <div>{`Youtube : ${props.youtube!==null ? props.youtube : 'Данных еще нет :('}`}</div>
        </div>
    )
}

export default Contacts
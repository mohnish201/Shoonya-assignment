

const useDateFormat = () => {

    const formatDate = (timestamp) => {

        if (!timestamp) {
            return null
        }
        const date = new Date(timestamp * 1000);
        const options = { year: 'numeric', month: 'long', day: 'numeric' }

        return date.toLocaleDateString(undefined, options)
    }

    return { formatDate }
}

export { useDateFormat }
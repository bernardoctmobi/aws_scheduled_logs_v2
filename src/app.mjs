console.log('Loading function');

export const handler = async (event, context) => {
    const date = new Date();
    console.log(`Sono le ${date.getHours()} e ${date.getMinutes()} minuti`);
    return true;
};

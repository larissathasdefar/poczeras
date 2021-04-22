export default function handler(req, res) {
    res.status(200).json([{
        uuid: '6cf4c970-8cc1-4004-898e-8a6250866ba6',
        name: 'Daniel Barros',
    }, {
        uuid: '3e73446e-e8f5-49f3-953e-2564ada61c73',
        name: 'Sónia Andrade Fidalgo',
    }, {
        uuid: '2c92b929-04d3-4964-9a51-56c177b609ea',
        name: 'Selma Regueira Milheiro',
    }, {
        uuid: '761174b2-f50b-4000-8d6a-007ac6d39d55',
        name: 'Marvin Ruela Quinteiro',
    }])
}
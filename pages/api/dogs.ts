export default function handler(req, res) {
    res.status(200).json([{
        uuid: '9fe86e60-4a1f-4363-bbbd-c574d20f989a',
        raca: 'Akita',
    }, {
        uuid: '1899db7d-6890-4b7d-bec4-db7ea0954a30',
        raca: 'American Bully',
    }, {
        uuid: '210bfdff-f380-4a5a-b716-b360dca082b0',
        raca: 'Bernese',
    }, {
        uuid: '9d4bb659-3129-47d4-9bec-e72a74a7d9ae',
        raca: 'Boxer',
    }, {
        uuid: '8397f95c-e4d4-4ff5-afcb-92386b4af808',
        raca: 'Dogo Argentino',
    }, {
        uuid: '6bf1be6b-7ca9-41e7-8a6e-5396fb33abf6',
        raca: 'Doberman',
    }])
}
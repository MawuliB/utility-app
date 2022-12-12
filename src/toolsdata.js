import { v4 as uuidv4 } from 'uuid'

export let toolsdata = [
    {
        'id': uuidv4(),
        'name': 'Convert PDF to TXT',
        'path': '/Pdftotxt',
        'description': 'For converting pdf files to txt files',
        'category': 'basic',
    }, {
        'id': uuidv4(),
        'name': 'Convert TXT to PDF',
        'path': '/Txttopdf',
        'description': 'For converting txt files to pdf files',
        'category': 'basic',
    }, {
        'id': uuidv4(),
        'name': 'Convert CSV to XML',
        'path': '/Csvtoxml',
        'description': 'For converting',
        'category': 'Image',
    },
    {
        'id': uuidv4(),
        'name': 'Convert CSV to XML',
        'path': '/Csvtoxml',
        'description': 'For converting',
        'category': 'Data Science',
    },
]
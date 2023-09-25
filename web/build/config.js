// These are the jobs that can create documents. The ranks in templateGrades can create templates for this job.
const AVAILABLE_JOBS = [
  {
    job: 'police',
    templateGrades: [3, 4],
    logo: 'https://cdn.discordapp.com/attachments/951797096875433994/1155946602729574542/161884.png',
  },
  {
    job: 'ambulance',
    templateGrades: [3],
    logo: 'https://i.pinimg.com/564x/6b/88/4f/6b884f7ebe28ff56a0e1fd9f5c47890a.jpg',
  },
  {
    job: 'mechanic',
    templateGrades: [4],
    logo: '/web/build/mechaniclogo.jpg',
  },
]

// These templates are visible to all players. If you don't want
// any citizen templates, delete everything inside the [] like this:
//    const CITIZEN_TEMPLATES = []
//
// If these templates are empty, the issued documents tab will
// not be visible to players who fon't have a specified job.
const CITIZEN_TEMPLATES = []

const COLORS = {
  // These are hexadecimal color codes for the main theme. You can change them as you wish.
  // Primary colors are colors of buttons, and some texts, while secondary color is used for the cancel button.
  primary: '#333333',
  secondary: '#333333',

  // These two should stay RGBA to give them a 90% opacity. Only change the first 3 numbers with any RGB code
  // i.e. rgba([red], [green], [blue], 0.9)
  menuGradientBottom: 'rgba(51, 51, 51, 0.9)',
  menuGradientTop: 'rgba(51, 51, 51, 0.9)',
}

// These are the texts that show up on the NUI. Translate them as you wish. If you'd like to change
// the client texts, go to the config.lua file.

const TEXTS = {
  myDocumentsTitle: 'Mine Dokumenter',
  issuedDocumentsTitle: 'Giv dokumenter',
  templatesTitle: 'Templates',
  customDocumentName: 'Dokument Navn',
  documentType: 'Type',
  documentName: 'Navn',
  unnamed: 'Unavngivet',
  actions: 'Actions',
  edit: 'Rediger',
  cancel: 'Annuller',
  delete: 'Slet',
  view: 'Se',
  show: 'Vis',
  copy: 'Giv',
  newTemplateBtn: 'Ny Template',
  deleteTemplateTitle: 'Slet Template',
  deleteTemplateQuestion: 'Are you sure you want to delete this template?:',
  date: 'Dato',
  newDocumentBtn: 'Nyt Dokument',
  deleteDocumentTitle: 'Slet Dokument',
  deleteDocumentQuestion: 'Are you sure you want to delete this document?:',
  signHereText: 'Underskriv her',
  cannotIssueDocument: 'You cannot issue a document with this job',
  issuerFirstname: 'UDSTEDER FORNAVN',
  issuerLastname: 'UDSTEDER EFTERNAVN',
  issuerDOB: 'UDSTEDER FØDEDATO',
  issuerJob: 'UDSTEDER JOB',
  termsAndSigning: 'INFO & UNDERSKRIFT',
  terms1: 'Dette dokument er officielt.',
  terms2:
    'Ved underskrift er dette dokument gyldig.',
  terms3:
    'Pas på med at give dette væk.',
  terms4:
    "Bliver dette dokument misbrugt, vil det koste dig måneder bag træmmer.",
  terms5: "Gå til din advokat for at forstå alvoren af dokumentet.",
  requiredError: 'This field is required',
  docNameField: 'DOKUMENT NAVN',
  docDescField: 'DOKUMENT BESKRIVELSE',
  docFieldField: 'FIELD NAVN',
  docAddField: 'Tilføj Field',
  docInfoNameField: 'INFORMATION TITEL',
  docInfoValueField: 'INFORMATION TEMPLATE',
  docMinGradeField: 'MINIMUM JOB GRADE',
  editTemplateBtn: 'REDIGER TEMPLATE',
  createTemplateBtn: 'OPRET TEMPLATE',
  createDocumentBtn: 'OPRET DOKUMENT',
  documentCopy: 'COPY',
}

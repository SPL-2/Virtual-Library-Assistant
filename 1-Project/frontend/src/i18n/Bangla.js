const bangla = { //ptBR
  common: {
    or: 'অথবা',
    cancel: 'বাতিল',
    reset: 'পুনরায় বসান',
    save: 'সংরক্ষণ',
    search: 'অনুসন্ধান',
    edit: 'সম্পাদনা',
    remove: 'অপসারণ',
    new: 'নতুন',
    export: 'export',
    noDataToExport: 'Export করার জন্য কোন ডেটা নেই',
    import: 'Import',
    discard: 'বাতিল',
    yes: 'হ্যাঁ',
    no: 'না',
    pause: 'Pause',
    areYouSure: 'আপনি কি নিশ্চিত',
    view: 'দেখুন',
    destroy: 'মুছে ফেলুন',
    mustSelectARow: 'একটি সারি নির্বাচন করতে হবে',
    confirm: 'নিশ্চিত করুন',
  },

  app: {
    title: 'শিরোনাম',
  },

  entities: {
    loan: {
      name: 'Loan',
      label: 'Loans',
      menu: 'Loans',
      exporterFileName: 'Export করা ফাইলের নাম',
      list: {
        menu: 'Loans',
        title: 'Loans',
      },
      create: {
        success: 'সফলভাবে সংরক্ষণ করা হয়েছে',
      },
      update: {
        success: 'সফলভাবে সংরক্ষণ করা হয়েছে',
      },
      destroy: {
        success: 'সফলভাবে মুছে ফেলা হয়েছে',
      },
      destroyAll: {
        success: 'সফলভাবে সব মুছে ফেলা হয়েছে',
      },
      edit: {
        title: 'সম্পাদনা করুন',
      },
      fields: {
        id: 'Id',
        'book': 'বই',
        'member': 'সদস্য',
        'issueDateRange': 'প্রদানের তারিখ',
        'issueDate': 'প্রদানের তারিখ',
        'dueDateRange': 'ফেরার তারিখ',
        'dueDate': 'ফেরার তারিখ',
        'returnDateRange': 'ফেরার তারিখ',
        'returnDate': 'ফেরার তারিখ',
        'status': 'Status',
        createdAt: 'তৈরির সময়',
        updatedAt: 'আপডেটর সময়',
        createdAtRange: 'তৈরির সময়',
      },
      enumerators: {
        'status': {
          'inProgress': 'চলমান',
          'overdue': 'দেরি',
          'closed': 'Closed',
        },
      },
      new: {
        title: 'নতুন Loan',
      },
      view: {
        title: 'Loan দেখুন',
      },
      importer: {
        title: 'Import Loans',
        fileName: 'Import Loan Templete',
        hint:
          'Files/Images must be the URLs of the files, separated by a space. Relationships must be space-separated IDs.',
      },
    },

    book: {
      name: 'Book',
      label: 'Book',
      menu: 'বই',
      exporterFileName: 'বই Export',
      list: {
        menu: 'Books',
        title: 'Books',
      },
      create: {
        success: 'বই সফলভাবে সংরক্ষণ করা হয়েছে',
      },
      update: {
        success: 'বই সফলভাবে আপডেট করা হয়েছে',
      },
      destroy: {
        success: 'বই সফলভাবে মুছে ফেলা হয়েছে',
      },
      destroyAll: {
        success: 'সকল বই সফলভাবে মুছে ফেলা হয়েছে',
      },
      edit: {
        title: 'বই সম্পাদনা করুন',
      },
      fields: {
        id: 'Id',
        'isbn': 'ISBN',
        'title': 'শিরোনাম',
        'author': 'লেখক',
        'numberOfCopiesRange': 'কপির সংখ্যা',
        'numberOfCopies': 'কপির সংখ্যা',
        'stockRange': 'Stock',
        'stock': 'Stock',
        'images': 'ছবি',
        'status': 'Status',
        createdAt: 'তৈরির সময়',
        updatedAt: 'আপডেটর সময়',
        createdAtRange: 'তৈরির সময়',
      },
      enumerators: {
        'status': {
          'available': 'Available',
          'unavailable': 'Unavailable',
        },
      },
      new: {
        title: 'নতুন বই',
      },
      view: {
        title: 'বই দেখুন',
      },
      importer: {
        title: 'বই Import',
        fileName: 'Import বই Template',
        hint:
          'Files/Images must be the URLs of the files, separated by a space. Relationships must be space-separated IDs.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Profile সম্পাদনা',
      success: 'Profile সফলভাবে Update করা হয়েছে৷',
    },
    createAnAccount: 'একটি Account তৈরি করুন',
    rememberMe: 'আমাকে মনে কর',
    forgotPassword: 'আমি আমার Password ভুলে গেছি',
    signin: 'Sign In করুন',
    signup: 'Sign Up করুন',
    signout: 'Sign Out করুন',
    alreadyHaveAnAccount: 'আগেই একটি Account আছে ?',
    signinWithAnotherAccount: 'অন্য Account দিয়ে Login করুন',
    emailUnverified: {
      message: `আপনার Email নিশ্চিত করুন`,
      submit: `পুনরায় Email দ্বারা নিশ্চিতকরণ পাঠান`,
    },
    emptyPermissions: {
      message: `আপনার কাছে এখনও অনুমতি নেই। Admin আপনার বিশেষাধিকার প্রদানের জন্য অপেক্ষা করুন।`,
    },
    passwordResetEmail: {
      message: 'Password Reset Email পাঠান',
      error: `Email পাওয়া যায়নি`,
    },
    passwordReset: {
      message: 'Password পরিবর্তন করুন',
    },
    emailAddressVerificationEmail: {
      error: `Email পাওয়া যায়নি`,
    },
    verificationEmailSuccess: `Email যাচাইকরণ সফলভাবে পাঠানো হয়েছে`,
    passwordResetEmailSuccess: `Password Reset Email সফলভাবে পাঠানো হয়েছে`,
    passwordResetSuccess: `Password সফলভাবে পরিবর্তন করা হয়েছে`,
    verifyEmail: {
      success: 'Email সফলভাবে যাচাই করা হয়েছে৷',
      message:
        'অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন, আপনার Email যাচাই করা হচ্ছে...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'সমস্ত বৈশিষ্ট্য সম্পূর্ণ অনুমতি',
    },
    editor: {
      label: 'Editor',
      description: 'সম্পাদনা করার অনুমতি',
    },
    viewer: {
      label: 'Viewer',
      description:
        'দেখার অনুমতি',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description:
        'Audit Log দেখার অনুমতি',
    },
    iamSecurityReviewer: {
      label: 'IAM Security Reviewer',
      description: `IAM Security Reviewer অনুমতি`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Entity সম্পাদনা করার অনুমতি',
    },
    entityViewer: {
      label: 'Entity Veiwer',
      description:
        'Entity দেখার অনুমতি',
    },
    loanEditor: {
      label: 'Loan সম্পাদক',
      description: 'Loan সম্পাদনা করার অনুমতি',
    },
    loanViewer: {
      label: 'Loan Viewer',
      description: 'Loan দেখার অনুমতি',
    },
    bookEditor: {
      label: 'বই সম্পাদক',
      description: 'বই সম্পাদনা করার অনুমতি',
    },
    bookViewer: {
      label: 'বই Viewer',
      description: 'বই দেখার অনুমতি',
    },
  },

  iam: {
    title: 'ব্যবহারকারী এবং অনুমতি ব্যবস্থাপনা',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Desabled',
    enabled: 'Enable',
    enable: 'Enabled',
    doEnableSuccess: 'ব্যবহারকারীকে সফলভাবে Enable করা হযেছে',
    doDisableSuccess: 'ব্যবহারকারীকে সফলভাবে Disable করা হযেছে',
    doDisableAllSuccess:
      'সকল ব্যবহারকারীকে সফলভাবে Disable করা হযেছে',
    doEnableAllSuccess:
      'সকল ব্যবহারকারীকে সফলভাবে Enable করা হযেছে',
    doAddSuccess: 'ব্যবহারকারীকে সফলভাবে যোগ করা হযেছে',
    doUpdateSuccess: 'ব্যবহারকারীকে সফলভাবে Update করা হযেছে',
    viewBy: 'দেখুন ..',
    users: {
      name: 'users',
      label: 'ব্যবহারকারী',
      exporterFileName: 'Exported ব্যবহারকারী',
      doRemoveAllSelectedSuccess:
        'সকল অনুমতি সফলভাবে সরানো হয়েছে',
    },
    roles: {
      label: 'Profile',
      doRemoveAllSelectedSuccess:
        'অনুমতি সফলভাবে সরানো হয়েছে',
    },
    edit: {
      title: 'ব্যবহারকারী সম্পাদনা করুন',
    },
    new: {
      title: 'নতুন ব্যবহারকারী',
      emailsHint:
        'কমা ব্যবহার করে একাধিক Email Address আলাদা করুন',
    },
    view: {
      title: 'ব্যবহারকারী দেখুন',
      activity: 'কার্যক্রম',
    },
    importer: {
      title: 'ব্যবহারকারী Import করুন',
      fileName: 'ব্যবহারকারী Import Template',
      hint:
        'Files/Images must be the URLs of the files, separated by a space. Relationships must be space-separated IDs.',
    },
    errors: {
      userAlreadyExists: 'এই Email সহ ব্যবহারকারী ইতিমধ্যেই বিদ্যমান',
      userNotFound: 'ব্যবহারকারীকে খুঁজে পাওয়া যায়নি',
      disablingHimself: `আপনি নিজেকে Disable করতে পারবেন না`,
      revokingOwnPermission: `আপনি আপনার নিজের Admin অনুমতি প্রত্যাহার করতে পারবেন না৷`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'প্রমাণীকরণ ID',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'পুরো নাম',
      firstName: 'নামের প্রথম অংশ',
      lastName: 'নামের শেষাংশ',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'ফোন নম্বর',
      role: 'অনুমতি',
      createdAt: 'তৈরির সময়',
      updatedAt: 'Update এর সময়',
      roleUser: 'Pofile',
      roles: 'অনুমতি সমূহ',
      createdAtRange: 'তৈরির সময়',
      password: 'Password',
      rememberMe: 'আমাকে মনে রাখুন',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} Invalid',
    },
  },

  auditLog: {
    menu: 'Audit Records',
    title: 'Audit Records',
    exporterFileName: 'Export_Audit_records',
    entityNamesHint:
      'কমা দ্বারা একাধিক Entity আলাদা করুন',
    fields: {
      id: 'Id',
      timestampRange: 'সময়',
      entityName: 'Entity এর নাম',
      entityNames: 'Entity এর নাম সমূহ',
      entityId: 'Entity এর ID',
      action: 'কার্যকলাপ',
      values: 'মান',
      timestamp: 'Data',
      createdByEmail: 'ব্যবহারকারীর Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings সফলভাবে সংরক্ষিত হয়েছে৷ পরিবর্তনগুলি কার্যকর হওয়ার জন্য পৃষ্ঠাটি {0} এ পুনরায় লোড হবে',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'সাধারণ',
      cyan: 'সবজে নীল',
      'geek-blue': 'গাড় নীল ',
      gold: 'সোনালী',
      lime: 'টিয়া ',
      magenta: 'Magenta',
      orange: 'কমলা',
      'polar-green': 'সবুজ',
      purple: 'বেগুনি',
      red: 'লাল',
      volcano: 'গাড় কমলা',
      yellow: 'হলুদ',
    },
  },
  home: {
    menu: 'Home',
    message: `এই Page টি শুধুমাত্র প্রদর্শনের উদ্দেশ্যে Demo Data ব্যবহার করে। আপনি frontend/src/modules/home/components/home-page.vue-এ এটি সম্পাদনা করতে পারেন`,
    charts: {
      day: 'দিন',
      red: 'লাল',
      green: 'সবুজ',
      yellow: 'হলুদ',
      grey: 'ধূসর',
      blue: 'নীল',
      orange: 'কমলা',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'খাওয়া',
      drinking: 'পান করা',
      sleeping: 'ঘুম',
      designing: 'Designing',
      coding: 'Codig',
      cycling: 'Cycling',
      running: 'দৌড়ান',
      customer: 'ক্রেতা',
    },
  },
  errors: {
    backToHome: 'Home Page এ ফিরে যান',
    403: `দুঃখিত, আপনার এই Page এ অনুমতি নেই৷`,
    404: 'দুঃখিত, আপনি যে Page দেখেছেন সেটি নেই',
    500: 'দুঃখিত, Server একটি ত্রুটি Report করছে',
    forbidden: {
      message: 'Access অস্বীকার করা হয়েছে৷',
    },
    validation: {
      message: 'একটি ত্রুটি পাওয়া গেছে',
    },
    defaultErrorMessage: 'Oops , একটি ত্রুটি হয়েছে',
  },
  /* eslint-disable */ // for skipping some errors
  validation: {
    mixed: {
      default: '${path} Invalid',
      required: '${path} প্রয়োজনীয়',
      oneOf:
        '${path} নিম্নলিখিত মানগুলির মধ্যে একটি হতে হবে: ${values}',
      notOneOf:
        '${path} নিম্নলিখিত মানগুলির মধ্যে একটি হওয়া উচিত নয়: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} একটি হতে হবে ${type}`;
      },
    },
    string: {
      length: '${path} অবশ্যই ${length} অক্ষর থাকতে হবে',
      min:
        '${path} কমপক্ষে ${min} অক্ষর থাকতে হবে',
      max:
        '${path} সর্বাধিক ${max} অক্ষর থাকতে হবে',
      matches:
        '${path} standard : "${regex}"',
      email: '${path} একটি বৈধ ইমেইল হতে হবে',
      url: '${path} একটি বৈধ Email হতে হবে',
      trim:
        '${path} Whitespace ছাড়া একটি শব্দ হতে হবে',
      lowercase: '${path} ছোট হতে হবে',
      uppercase: '${path} Capital হতে হবে',
      selected: '${path} নির্বাচন করা আবশ্যক',
    },
    number: {
      min: '${path}, ${min} এর থেকে বড় বা সমান হতে হবে ',
      max: '${path} , ${max} এর থেকে কম বা সমান হতে হবে',
      lessThan: '${path} থেকে কম হতে হবে ${less}',
      moreThan: '${path} থেকে কম হতে হবে ${more}',
      notEqual: '${path} সমান হতে হবে না ${notEqual}',
      positive: '${path} অবশ্যই একটি ধনাত্মক শব্দ হতে হবে',
      negative: '${path} একটি ঋণাত্মক সংখ্যা হতে হবে',
      integer: '${path} একটি পূর্ণসংখ্যা হতে হবে',
      invalid: '${path} অবশ্যই একটি সংখ্যা হবে',
    },
    date: {
      min: '${path} পরে হতে হবে ${min}',
      max: '${path} এর আগে হতে হবে ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} বস্তুর বিন্যাসে অনির্দিষ্ট বৈশিষ্ট্য থাকতে পারে না',
    },
    array: {
      min: '${path} অন্তত ${min} আইটেম থাকতে হবে',
      max: '${path} সর্বাধিক ${max} আইটেম থাকতে হবে',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload করুন',
    image: 'আপনি একটি ছবি Upload করতে হবে',
    size:
      'File টি অনেক বড়। সর্বাধিক অনুমোদিত আকার হল {0}',
    formats: `ভুল Format. এটা হবে: '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'অপেক্ষামান',
    imported: 'Imported',
    error: 'ত্রুটি',
    total: `{0} Imported, {1} অপেক্ষামান এবং {2} ভুল`,
    importedMessage: `{1}টির মধ্যে {0}টি প্রক্রিয়া করা হয়েছে`,
    noNavigateAwayMessage:
      'এই Page টি ছেড়ে যাবেন না, Import বন্ধ হয়ে যাবে',
    completed: {
      success:
        'Import সম্পন্ন হয়েছে। সমস্ত Line সফলভাবে Import করা হয়েছে',
      someErrors:
        'প্রক্রিয়াকরণ সম্পূর্ণ হয়েছে, কিন্তু কিছু Line Import করা যায়নি',
      allErrors:
        'Import ব্যর্থ হয়েছে৷ কোন বৈধ Line নেই',
    },
    form: {
      downloadTemplate: 'Template Download করুন',
      hint:
        'চালিয়ে যেতে এই এলাকায় File টিকে Click করুন বা টেনে আনুন',
    },
    list: {
      discardConfirm:
        'আপনি কি নিশ্চিত? Import না করা Data হারিয়ে যাবে',
    },
    errors: {
      invalidFileEmpty: 'File টি খালি',
      invalidFileExcel:
        'শুধুমাত্র Excel (.xlsx) ফাইল অনুমোদিত',
      invalidFileUpload:
        'অবৈধ File , আপনি সর্বশেষ Template ব্যবহার করছেন কি না নিশ্চিত করুন',
      importHashRequired: 'Import Hash প্রয়োজন',
      importHashExistent: 'Data ইতিমধ্যেই Import করা হয়েছে',
    },
  },

  autocomplete: {
    loading: 'Load হচ্ছে...',
  },

  imagesViewer: {
    noImage: 'কোন ছবি নেই',
  },
};

export default bangla;

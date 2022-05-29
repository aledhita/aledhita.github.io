const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    Swal.fire({
        title :'Selamat Datang Ayang:)',
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title :'Coba Masukkin Nama Kamu Cantik',
            input :'text',
            confirmButtonText: 'Submit',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `Hai ${result.value} Cantik`,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: `Kamu Kangen gk sama aku?`,
                  showDenyButton: true,
                  confirmButtonText: 'Kangen Banget',
                  denyButtonText: `Gk Kangen`,
                }).then((result) => {
                  
                  /* Kangen alert*/
                  if (result.isConfirmed) {
                    Swal.fire(
                      'Ulululuh Ada yang kangen nih',
                      "Aku juga kangen sama ayang",
                    ).then((result) => {
                      if (result.isConfirmed){
                        Swal.fire({
                          title: `Kamu Sayang gk sih sama aku?`,
                          showDenyButton: true,
                          confirmButtonText: 'Sayang Banget',
                          denyButtonText: `Gk Sayang`,
                        }).then((result) => {

                          /* Sayang alert */
                          if(result.isConfirmed){
                            Swal.fire({
                              title: 'Aku juga sayang banget sama ayang'
                            }).then((result) => {
                              if(result.isConfirmed){
                                Swal.fire({
                                  title: 'Sekarang coba tebak tanggal anniversary kita kapan? ',
                                  text: 'tanggal dan bulan aja',
                                  input: 'text',
                                }).then(({value}) => {
                                    if (value === '29 Mei') {
                                      Swal.fire({
                                        title: 'Yeay bener, Ayang masih hapal ternyata',
                                        icon: 'success'
                                      }).then((result) => {
                                        if (result.isConfirmed){
                                          Swal.fire({
                                            title: 'Coba sekarang kamu pilih angka di bawah ini',
                                            input: 'select',
                                            inputOptions: {
                                              'Oba' : '1',
                                              'Opus' : '2',
                                              'Bee' : '3',
                                              'Aku' : '4',
                                            }
                                          }).then(function(result){
                                            if (result.isConfirmed) {
                                              Swal.fire({
                                                title: `Yeay! Ternyata kamu dapat ${result.value} `, 
                                                text: `Kamu jaga ${result.value} baik-baik yah, jangan bikin ${result.value} jadi ngambek:)` 
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  Swal.fire({
                                                    title: 'Notice',
                                                    text: 'Aku nak peyuk ayang boleh gk?',
                                                    imageUrl: 'img/uwu.jpg',
                                                    imageWidth: 200,
                                                    imageHeight: 200,
                                                    imageAlt: 'Custom image',
                                                    showDenyButton: true,
                                                    confirmButtonText:'Boleh Banget',
                                                    denyButtonText: 'Gk boleh',
                                                  }).then((result) => {
                                                    if (result.isConfirmed) {
                                                      Swal.fire({
                                                        title: 'Yeay di peyuk sama Ayang',
                                                        text: 'Makasih ayang',
                                                        imageUrl: 'img/panda.gif',
                                                        imageWidth: 200,
                                                        imageHeight: 200,
                                                      }).then((result) => {
                                                        if (result.isConfirmed) {
                                                          Swal.fire({
                                                            title: 'Notice',
                                                            text: 'Sekarang kamu klik lagi tombol yang di bawahnya yah cantik:)'
                                                          })
                                                        }
                                                      })
                                                    }else if (result.isDenied) {
                                                        Swal.fire({
                                                          title: 'Ah gak tau ah ngambek aja',
                                                          imageUrl: 'img/ngambek.gif',
                                                          imageWidth: 200,
                                                          imageHeight: 200,
                                                        }).then((result) => {
                                                          if (result.isConfirmed) {
                                                            Swal.fire({
                                                              title: 'Notice',
                                                              text: 'Sekarang kamu klik lagi tombol yang di bawahnya yah cantik:)'
                                                            })
                                                          }
                                                        })
                                                    }
                                                  })
                                                }
                                              })
                                            }
                                          })
                                        }
                                      })
                                    }else {
                                      Swal.fire({
                                        title: 'Salah ayang, gk hapal yahh:(',
                                        icon: 'error',
                                    })
                                    }
                                })
                              }
                            })
                          }else if (result.isDenied) {
                            Swal.fire(
                              'Notice',
                              'Masa sih,aku gak percaya'
                            ).then((result) => {
                              if (result.isConfirmed) {
                                Swal.fire({
                                  title: 'Notice',
                                  text: 'Ish, kamu kangen tapi gk sayang gimana ceritanya coba'
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    Swal.fire({
                                      text: 'Sayang atau gk nih sama aku?',
                                      imageUrl: 'img/cute.gif',
                                      imageWidth: 200,
                                      imageHeight: 200,
                                      imageAlt: 'Custom image',
                                      showDenyButton: true,
                                      confirmButtonText:'Sayang kok',
                                      denyButtonText: 'Tetep gk sayang',
                                    }).then((result) => {
                                      if (result.isConfirmed) {
                                        Swal.fire({
                                          title: 'Notice',
                                          text: 'Tuhkan, udah aku duga pasti Ayang sayang sama aku',
                                          imageUrl: 'img/peluk.gif',
                                          imageWidth: 200,
                                          imageHeight: 200,
                                        }).then((result) => {
                                          if(result.isConfirmed){
                                            Swal.fire({
                                              title: 'Sekarang coba tebak tanggal anniversary kita kapan? ',
                                              text: 'tanggal dan bulan aja',
                                              input: 'text',
                                            }).then(({value}) => {
                                                if (value === '29 Mei') {
                                                  Swal.fire({
                                                    title: 'Yeay bener, Ayang masih hapal ternyata',
                                                    icon: 'success'
                                                  }).then((result) => {
                                                    if (result.isConfirmed){
                                                      Swal.fire({
                                                        title: 'Coba sekarang kamu pilih angka di bawah ini',
                                                        input: 'select',
                                                        inputOptions: {
                                                          'Oba' : '1',
                                                          'Opus' : '2',
                                                          'Bee' : '3',
                                                          'Aku' : '4',
                                                        }
                                                      }).then(function(result){
                                                        if (result.isConfirmed) {
                                                          Swal.fire({
                                                            title: `Yeay! Ternyata kamu dapat ${result.value} `, 
                                                            text: `Kamu jaga ${result.value} baik-baik yah, jangan bikin ${result.value} jadi ngambek:)` 
                                                          }).then((result) => {
                                                            if (result.isConfirmed) {
                                                              Swal.fire({
                                                                title: 'Notice',
                                                                text: 'Aku nak peyuk ayang boleh gk?',
                                                                imageUrl: 'img/uwu.jpg',
                                                                imageWidth: 200,
                                                                imageHeight: 200,
                                                                imageAlt: 'Custom image',
                                                                showDenyButton: true,
                                                                confirmButtonText:'Boleh Banget',
                                                                denyButtonText: 'Gk boleh',
                                                              }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                  Swal.fire({
                                                                    title: 'Yeay di peyuk sama Ayang',
                                                                    text: 'Makasih ayang',
                                                                    imageUrl: 'img/panda.gif',
                                                                    imageWidth: 200,
                                                                    imageHeight: 200,
                                                                  }).then((result) => {
                                                                    if (result.isConfirmed) {
                                                                      Swal.fire({
                                                                        title: 'Notice',
                                                                        text: 'Sekarang kamu klik lagi tombol yang di bawahnya yah cantik:)'
                                                                      })
                                                                    }
                                                                  })
                                                                }else if (result.isDenied) {
                                                                    Swal.fire({
                                                                      title: 'Ah gak tau ah ngambek aja',
                                                                      imageUrl: 'img/ngambek.gif',
                                                                      imageWidth: 200,
                                                                      imageHeight: 200,
                                                                    }).then((result) => {
                                                                      if (result.isConfirmed) {
                                                                        Swal.fire({
                                                                          title: 'Notice',
                                                                          text: 'Sekarang kamu klik lagi tombol yang di bawahnya yah cantik:)'
                                                                        })
                                                                      }
                                                                    })
                                                                }
                                                              })
                                                            }
                                                          })
                                                        }
                                                      })
                                                    }
                                                  })
                                                }else {
                                                  Swal.fire({
                                                    title: 'Salah ayang, gk hapal yahh:(',
                                                    icon: 'error'
                                                })
                                                }
                                            })
                                          }
                                        })
                                      }else if (result.isDenied) {
                                          Swal.fire({
                                            text: 'Heum ayang tetep gk sayang sama aku, ya udah gapapa koo:)',
                                            imageUrl: 'img/cry.gif',
                                            imageWidth: 200,
                                            imageHeight: 200,
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                              Swal.fire({
                                                title: 'Notice',
                                                text: 'Makasih yah ayang, dengan berat hati sedih rasanya:)'
                                              })
                                            }
                                          })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })

                      }
                    })
                  } else if (result.isDenied) {
                    Swal.fire({
                      title: 'Ya udah kalo gk kangen sama aku juga gapapa:)'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: 'Alert!',
                          text: 'Makasih yah udah mau liat hasil usahaku:)'
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
          
        }
      })
  
})

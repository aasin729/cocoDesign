(function($){ 

    $('.joinBox form').on('submit', function(){
        //.val()은 양식(form)의 값을 가져오거나 값을 설정하는 메소드
       let idbox =  $('#idbox').val()
       if(!idbox){
        alert('아이디를 입력하세요.')
        $('#idbox').focus()
        // focus() - 해당 요소에 포커스를 부여하여, 
        // 텍스트의 경우 커서를 위치시켜 바로 입력이 가능
        // 버튼의 경우, 엔터키를 눌렀을때 클릭 효과 나타낸다.
        return false
       }

       let pwbox = $('#pwbox').val()
       if(!pwbox){
        alert('비밀번호를 입력하세요.')
        $('#pwbox').focus()
        return false
       }

       let pwboxok = $('#pwboxok').val()
       if(pwbox !== pwboxok){
         alert('비밀번호가 틀립니다.')
         $('#pwboxok').focus()
         return false
       }

       let irum = $('#irum').val()
       if(!irum){ 
         alert('이름을 입력하세요.')
         $('#irum').focus()
         return false
      }

      let hp1 = $('#hp1').val()
      let hp2 = $('#hp2').val()
      let check3 = /[0-9]{3,4}/  // /\d{3,4}/
      let check4 = /[0-9]{4}/    // /\d{4}/

      if( !check3.test(hp1) ){
        alert('번호 형식이 맞지 않습니다.')
        $('#hp1').focus()
        return false
      }

      if( !check4.test(hp2) ){
        alert('번호 형식이 맞지 않습니다.')
        $('#hp2').focus()
        return false
      }


      // 이메일 유효성 체크
      let emailid = $('#emailid').val()
      let check5 = /^[a-zA-Z0-9]+$/    // 첫글자는 영문소문자, 대문자, 숫자 중 하나여야 함 
                                       // ^ : 첫문자 일치
                                       // $ : 끝문자 일치
                                       // + : 한번 이상 포함
                                       // * : 0번 이상 포함
      if (!check5.test(emailid)) {  
         alert('이메일 아이디 형식이 맞지 않습니다.')
         $('#emailid').focus()
         return false
      }

      let emaildomain = $('#emaildomain').val()
      let check6 = /^[a-zA-Z0-9]+[\.]+[a-z]+([\.][a-z]+)*$/
      if( !check6.test(emaildomain)){
        alert('이메일을 정확하게 입력하세요.')
        $('#emaildomain').focus()
      }

      let gender = $("input[name='gender']:checked").length;
      if(!gender) { 
        alert("성별을 선택해주세요.")
        // $("input[name='gender']").focus()
        return false
      }


    //    return false //백엔드 프로그램 연결후에는 삭제함
    })

    //=======================================================================

    // 이메일 계정 선택하기 
    $('#domainlist').on('change', function(){
      $('#domainlist option:selected').each(function(){
        if( $(this).val() !== 'noselect' && $(this).val() !== 'self' ){
            $('#emaildomain').val($(this).val()).attr({disabled:true})
            // .attr()은 요소(element)의 속성(attribute)의 값을 가져오거나 속성을 추가한다.
        } else if($(this).val()==='noselect'){
          $('#emaildomain').val('').attr({disabled:true})
        }else{
          $('#emaildomain').val('').attr({disabled:false})
        }
      })
    })


    // 관심분야 전체선택 체크 유무
    $('#all').on('click', function(){
      let bool =  $(this).prop("checked");
      $('input[name^="co"]').prop('checked', bool)
    })

    //메모 부분 남은글자 체크하기 
    $('#memo').on('keyup', function(){
      let maxlen = 10
      let count = $(this).val().length
      let remain = maxlen - count
      $(this).next().text(remain)
    })

    // 생년 월일에 달력 추가하기 
    $( "#birth").datepicker({
       showOtherMonths: true,          
       selectOtherMonths: true,
       dateFormat:'yy-mm-dd',        
       changeMonth: true,
       changeYear: true,
       // numberOfMonths: 3,xxxxxxxxxxxxxxxxb
       // showButtonPanel: true,
        yearSuffix: "년"        //달력의 년도 부분 뒤 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
        ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
    });









})(jQuery)


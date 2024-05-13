import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiGoogleLogin } from '../api.js';

export default function Google() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const code = params.get('code');
    const { data } = useQuery(['getUser', { code }], apiGoogleLogin);

    const navigate = useNavigate();
    if (data?.result === true) {
        sessionStorage.setItem('userData', JSON.stringify(data));
        navigate('/home');
    }

    return (
        <div className="w-full flex flex-col items-center justify-center py-16">
            <div className="text-2xl font-bold">잠시만 기다려 주세요</div>
            <div className="text-sm font-semibold">구글 로그인 중입니다.</div>
        </div>
    );
}
